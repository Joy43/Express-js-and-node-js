"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parse 
app.use(express_1.default.json());
app.use(express_1.default.text());
// First GET route
app.get('/', (req, res) => {
    console.log(req.params);
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
exports.default = app;
