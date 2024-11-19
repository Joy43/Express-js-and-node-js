"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middleware to parse JSON and text data
app.use(express_1.default.json());
app.use(express_1.default.text());
// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - Host: ${req.hostname}`);
    next();
};
// Router setup
const userRouter = express_1.default.Router();
// Define the user creation route
userRouter.post('/create-user', (req, res) => {
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
app.get('/', logger, (req, res) => {
    try {
        res.send('Something');
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'Failed to get data',
        });
    }
});
// Global error handling middleware
app.use((err, req, res, next) => {
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
exports.default = app;
