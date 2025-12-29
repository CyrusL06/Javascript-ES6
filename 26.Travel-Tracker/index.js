import express from "express";
import bodyParser from "body-parser";
//1.
import pg from "pg";


const app = express();
const port = 3000;
//2.

  const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "country",
    password: "C@lyx*0626",
    port: 5342,
  })

  db.connect();

  db.query("SELECT * FROM visited_countries" , (err,res) => {
    if(err){
      		console.error("Error exeuting query", err.stack);
    }else {
      // console.log(res.rows);
    }
  })



let totalCorrect = 0;
let currentCountry = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async(req, res) => {
  //Write your code here.
  //2.now we need to get the EJS UP..

    const result = await db.query("SELECT country_code FROM visited_countries");
    console.log(result.rows);
    let countries = [];

    result.rows.forEach((country) => {
      countries.push(country.country_code);
    })

    res.render("index.ejs", 
      {
      total: totalCorrect, 
      countries:countries, 
     });
     db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

