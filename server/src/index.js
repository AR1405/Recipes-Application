import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/users.js"
import {recipesRouter} from "./routes/recipes.js"
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);

let API=process.env.API;

mongoose.connect(API,
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});



app.listen(3001, ()=> console.log("SERVER STARTED!"));