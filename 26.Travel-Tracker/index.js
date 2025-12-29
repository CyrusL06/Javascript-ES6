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


let totalCorrect = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//PT.1
app.get("/", async(req, res) => {
  //Write your code here.
  //2.now we need to get the EJS UP..

    // const result = await db.query("SELECT country_code FROM visited_countries");
    // console.log(result.rows);
    // let countries = [];

    // result.rows.forEach((country) => {
    //   countries.push(country.country_code);
    // })

    const countries = await checkVisited();
     res.render("index.ejs", { countries: countries, total: countries.length });

    //  db.end();
});

//PT.2
app.post("/add", async (req, res) => {
  //1. we need to hand the post request
  //grab the req.body.country and 
  // Using that result use a DB Query to find that country displaying its country code
  // Insert it inside DB
  //Redirect to main page
  const input = req.body["country"];

  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1 ", 
    [input]);

  if(result.rows.length !== 0){
  const data = result.rows[0];
  const countryCode = data.country_code;
  // console.log(countryCode);

  await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
  res.redirect("/");
  }
});


async function checkVisited () {
    const result = await db.query("SELECT country_code FROM visited_countries");
    console.log(result.rows);
    
    let countries = [];
    result.rows.forEach((country) => {
      countries.push(country.country_code);
    })
    return countries;
}


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

