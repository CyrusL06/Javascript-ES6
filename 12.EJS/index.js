import express from "express";
import { dirname } from "path"; // from node
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
const dir = fileURLToPath(dirname(import.meta.url));
const urlEncoder = bodyParser.urlencoded();


const today = new Date();
const dayOfWeek = today.getDay();

let weekday = [ 1, 2, 3, 4, 5];
let weekend = [ 0, 6];
let activity =" ";
console.log(dayOfWeek);

    function validateIfDayOrEnd () {
        if( weekday.includes(dayOfWeek) == true)
        {
                console.log("its he weekday");
                activity = "work hard";
                return "weekday what are you doing?"
                
                

        } else if (weekend.includes(dayOfWeek) == true)
        {
            console.log("its the weekend");
            activity = "Have fun";

            return "weekend";
        }
    }



app.get("/",urlEncoder, (req, res) => {
    console.log(dayOfWeek);
    validateIfDayOrEnd ();

    res.render("index.ejs", {day: validateIfDayOrEnd(), doActivity: activity });
    console.log(activity);
}
 )




 app.listen( port , () => {
    console.log(`Listening to port ${port}}`);
 })
