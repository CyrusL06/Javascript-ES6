//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

//Import expressJS
import { urlencoded } from "body-parser";
import express from "express";
import { dirname } from "path"; // from node


const app = express();
const port = 3000;

app.get('/', urlencoded, (res,req) => {
    res.send("Hello")
})

