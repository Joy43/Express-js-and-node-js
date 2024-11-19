import express, { NextFunction, Request, Response } from 'express';

const app = express();

// Middleware to parse JSON and text data
app.use(express.json());
app.use(express.text());

// Logger middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url} - Host: ${req.hostname}`);
  next();
};

// Router setup
const userRouter = express.Router();

// Define the user creation route
userRouter.post('/create-user', (req: Request, res: Response) => {
  const user = req.body; 
  res.json({
    success: true,
    message: 'User is created successfully',
    data: user,
  });
});

// Use the router with the base path
app.use('/', userRouter);

// First GET route with logger middleware
app.get('/', logger, (req: Request, res: Response) => {
  try {
    res.send('Something');
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: 'Failed to get data',
    });
  }
});

// Global error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
