

//Add eventListener
//We dont add parenthesis because having it means trigger method thus we dont
//QuerySelector select frst
document.querySelectorAll("button")[0].addEventListener("click",handleClick);
var numOfButton = document.querySelectorAll(".drum").length
                                                //That has class drum
    for (var i = 0; i <numOfButton; i++)
    {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
  }

function handleClick()
{
  alert("Got clicked!");
}