//PT.1

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.



import React from "react";
import ReactDOM from "react-dom";

// const name = "Angela";


// ReactDOM.render(
// <div>
//     <h1>{name} Favourite Foods</h1>
//     <ul>
//         <li>Bacon</li>
//         <li>Jamon</li>
//         <li>Noodles</li>
//     </ul>
// </div>, document.getElementById("root"));

//--------------------------------

//PT.2
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.


// let myName = "Cyrus";
// const currentYear = new Date().getFullYear();

// ReactDOM.render(
// <div>
//     <h1 className ="heading">Created By: {myName}</h1>
//     <p>Copyright {currentYear}</p>
// </div>, document.getElementById("root"));

//--------------------------------

//PT.3

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

 const currentTimeString = new Date().toLocaleTimeString();
 let hours;
 let message;

 const customStyle = {
    color: "",
 }

function getCurrent24htTime(){
    const now = new Date();

    hours = now.getHours();
    hours = hours < 10 ? "0" + hours: hours;

    console.log(hours);

    if(hours < 12 ) //hours less than 12
    {
        message = "Good Morning";
        customStyle.color="red";
    } else if (hours === 12 || hours < 18)
    {
        message = "Good Afternoon";
        customStyle.color="green"
    } else {
        message = "Good Evening";
        customStyle.color="blue"

    }
 }

getCurrent24htTime();

ReactDOM.render(
    <div>
        <h1 style={customStyle}>{message} + {hours}</h1>
    </div>, 
    document.getElementById("root")
);

