
/**
 * 1. Get the file in the directry
 */

import bodyParser from "body-parser";
import express from "express";
import { console } from "inspector";
import { dirname } from "path"; // from node
import { fileURLToPath } from "url";
import morgan from "morgan";


const app = express();
const port = 3000;

//Find the html path to get
const __dirname = dirname(fileURLToPath(import.meta.url));
//Encode
const urlEncoder = bodyParser.urlencoded();


//function version
function mylogger(req, res, next)
{
  console.log("Request Method", req.method);
    console.log("Request URL", req.url);
    next();

}

app.use(mylogger);


app.get('/', urlEncoder, (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log(__dirname + "/public/index.html");

});

app.post('/submit', urlEncoder, (req,res) => {
  console.log(req.body);
  //Grab the first input inside...
  // console.log(req.body.street);
  var firstInput = req.body.street;
  var secondInput = req.body.pet;
  var objec = req.body
  res.send(`<h1>Hi ${firstInput}${secondInput} </h1>`)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

