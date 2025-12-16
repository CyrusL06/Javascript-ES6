//REPL
// Read Evaluate Print Loop\
// computer environment where user inputs are read and evaluated, and them the results
// are returned to the user

// enter node

// console.log("Hello from node");

//Native nod

//node index.js

//file system module
const fs = require("fs");
const { readFile } = require("fs/promises");
const { start } = require("repl");
//Use method with writeFile('message')
fs.writeFile('message.txt', "Hello from angela", (err) =>{
    if(err) throw err;
    console.log("Fle saved");
});


//From documentation
                   //Add utf with this you can 
fs.readFile('message.txt', "utf8",(err, data) =>{
    if(err) throw err;
    console.log(data);
});


