import express from "express";
import { dirname } from "path"; // from node
import { fileURLToPath } from "url";
//Use middleware
import bodyParser from "body-parser";

                  //dire path directly
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

// THIS!!
app.use(bodyParser.urlencoded({extended: true}));
//EVery single request has body

app.get("/", (req, res) => {

            //All the path we want to access
  res.sendFile(__dirname + "/public/index.html");
  console.log(__dirname + "/public/index.html");

});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
