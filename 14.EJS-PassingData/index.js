import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//to get the body of post request
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //Renders index.ejs first to the server
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {

 const  numOfLetters = req.body["fName"].length + req.body["lName"].length;
  console.log(numOfLetters);
  //Send this variable

  res.render("index.ejs", { numberOfLetters: numOfLetters });
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
