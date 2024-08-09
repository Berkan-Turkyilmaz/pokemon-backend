import express from 'express';
import { createUser, getUsers, userLogin } from '../controllers/user.js';





export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.post("/login",userLogin)