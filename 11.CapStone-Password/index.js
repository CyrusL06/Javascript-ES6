//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

//Import expressJS
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path"; // from node
import { fileURLToPath } from "url";

import morgan from "morgan";



const app = express();
const port = 3000;
const urlEncoder = bodyParser.urlencoded();
const directoryName = dirname(fileURLToPath(import.meta.url));
const logger = morgan('tiny');

app.use(logger);

function checkPassword(pass, res)
{
    if (pass = Password)
    {
        res.send("dwayusda waduabda waidbawda aa dwa")
    } else 
    {
     res.sendFile(directoryName + "/public/index.html");
    }
}

app.get('/', urlEncoder, (req,res) => {
    res.sendFile(directoryName + "/public/index.html");
    console.log()
})

app.post('/check', urlEncoder, (req, res) => {

    var pass = req.body.password;
    var Password = "Password";
     if (pass == "Password")
    {
        res.send("Ummm your gay...")
    } else 
    {
     res.send(`<h1>Secret</h1>
                <p>Try Agaian</p>
                 <form action="/check" method="POST">
                 <label for="password">Password:</label>
                 <input type="text" id="password" name="password" required>
                 <input type="submit" value="Submit">
                  </form>`)

    }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

