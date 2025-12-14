
let message = "Hello, World!";
console.log(message);

message.length;
console.log("Length of message:", message.length);

//Creares floating point 
//pseudo random range from 0 - 0.9999...
//this reaches number 0 till 5.99 but never reaches 6
var n = Math.random()*6;
var m = Math.floor(n); //removes decimal places
// therefore when we add 1 it becomes 1 - 6
var p = Math.random();
var k = Math.floor(p*6) + 1;
console.log("Random number between 0 and 5:", n);
console.log("Random number between 0 and 5 With whole:", m);
console.log("Random number + 1:", k);


//Generate Number
let CalculateLoveNum = Math.random();
let LoveNum = Math.floor(CalculateLoveNum * 100) + 1;
// alert("Your Love Score is " + LoveNum + "%");
console.log("Your Love Score is " + LoveNum + "%");


// Conditional Statement

if (LoveNum === 100) 
{
    // alert("WOW 100% Love!");
} else if (LoveNum > 70 && LoveNum <= 99)
{
    // alert("You love each other like Kanye loves Kanye.");
}

// Working With Arrays IN JAVA SCRIPT

 let guesList = [ "Angela", "Jack", "Pam", "James", "Lara", "Jason"];
 console.log( "Guest Length: " +guesList.length);
console.log( "Guest Length 1:  " +guesList[0]);
//computer check array see if it matches with any in array
//if true else false;
guesList.includes("Jack");

//Prompts ask user to input something
// let guesName = prompt("Enter your name: ");
let guesName = "Cyrus"
if (guesList.includes(guesName))
{
    alert("Welcome to the party " + guesName);
} else 
{
    alert("Sorry not here");
}

//FizzBuzz Challenge
//1, prints number from 1-100;
//2. if num has 3 is multiple by 3 Fizz
//3. if num multiple 5 print Buzz
//4. if both print FizzBuzz

var guestInsert = Math.random();
let output = " ";
var guestNum = 15
    console.log(guestInsert);

if (guestNum % 3 == 0 && guestNum % 5 == 0)
{
    output = "FizzBuzz";
    console.log(output);
} else if (guestNum % 5 == 0)
{
    output += "Buzz";
} else if (guestNum % 3 == 0)
{
    output += "Fizz";
    console.log(output);
}


console.log(guestNum);

console.log(output);



