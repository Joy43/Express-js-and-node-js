import express, { Request, Response } from 'express';
const app = express();

// parse 
app.use(express.json())
app.use(express.text())
// First GET route
app.get('/', (req: Request, res: Response) => {
  console.log(req.params)
  res.send('Hello World!');
});

// Second GET route with parameters
// app.get('/ids/:userId/:subid', (req: Request, res: Response) => {
//   const { userId, subid } = req.params;
//   res.send(`User ID: ${userId}, Sub ID: ${subid}`);
//   console.log(userId)
// });

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;