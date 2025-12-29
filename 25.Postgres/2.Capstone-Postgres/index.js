import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

let quiz = [
  { name: "France", flag: "Paris" },
  { name: "United Kingdom", flag: "London" },
  { name: "United States of flag", capital: "New York" },
];

//1.Connects the server into database...
const db = new pg.Client(
{
  user: "postgres",
  host: "localhost",
  database: "country",
  password: "C@lyx*0626",
  port: 5342,
});

db.connect();

//2.Puts in the query for it!
db.query("SELECT * FROM flags", (err , res) => {
  if(err){
    console.error("Error exeuting query", err.stack);
  }else{
    	console.log("User data:", res.rows); //show all rows
      quiz = res.rows
  }

})


let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  //This is the header of the SQL 'name'
  console.log(answer);
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
