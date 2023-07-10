import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/users.js"
import {recipesRouter} from "./routes/recipes.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);

mongoose.connect("mongodb+srv://aryanray1405:Aryan123@recipes.4fypwkz.mongodb.net/recipes?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.listen(3001, ()=> console.log("SERVER STARTED!"));