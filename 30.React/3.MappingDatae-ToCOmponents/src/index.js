import React from "react";
import App from "./components/App";
import "../src/style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);


var numbers = [3, 56, 2, 48, 5];


//Map -Create a new array by doing something with each item in an array.
        //method that takes function to tell what to do

    function double(x){
    return x*2;
}
    numbers.map(double);

//Filter - Create a new array by keeping the items that return true.
//keep items that are true...
const newNum = numbers.filter(function(num){return num >10});
//56,48

//Reduce - Accumulate a value by doing something to each item in an array.
//if we want to summ all of it

var newNumber
numbers.forEach(function(currentMumber){newNumber += currentMumber})

    //in reduce

var newRedNum = numbers.reduce(function(accumulator, currentMumber)
                {return accumulator + currentMumber}
                );


//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
