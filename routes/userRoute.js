import express from "express";
import { userAuth } from "../src/middleware/userAuth.js";
import { getUserData } from "../src/controller/userController.js";

const userRouter = express.Router();
// Endpoint for get users data
userRouter.get('/data', userAuth, getUserData);

export default userRouter;
