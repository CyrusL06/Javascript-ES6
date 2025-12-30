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


//PT.2
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.


let myName = "Cyrus";
const currentYear = new Date().getFullYear();

ReactDOM.render(
<div>
    <h1 className ="heading">Created By: {myName}</h1>
    <p>Copyright {currentYear}</p>
</div>, document.getElementById("root"));