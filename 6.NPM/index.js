//npm init -> brinfs the utility -> package.json(config file)
//This does nothing until we install npm package



import generateName from "sillyname";
import { randomSuperhero } from "superheroes";
const name = randomSuperhero();

//  var generate = require("sillyname");
var sillyName = generateName();
// var superName = superheroes.random();

console.log(`My Name is ${sillyName}`);
console.log(name);

