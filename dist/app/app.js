"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
//logger
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created sucessfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User is created sucessfully",
        data: course,
    });
});
app.get("/", logger, async (req, res, next) => {
    try {
        res.send('something');
    }
    catch (error) {
        next(error);
        // res.status(400).json({
        //   success: false,
        //   message: "failed to get data",
        // });
    }
});
app.post("/", logger, (req, res) => {
    res.json({
        message: "successfully received data",
    });
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
exports.default = app;
