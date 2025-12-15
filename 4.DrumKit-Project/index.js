

//Add eventListener
//We dont add parenthesis because having it means trigger method thus we dont
//QuerySelector select frst
document.querySelectorAll("button")[0].addEventListener("click",handleClick);
var numOfButton = document.querySelectorAll(".drum").length
                                                //That has class drum
    for (var i = 0; i <numOfButton; i++)
    {

    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
        
    //identuty of button
        
    }


function handleClick()
{
    console.log(this.innerHTML);
    var pressed = this.innerHTML;
    // alert("Got clicked!");
    // var audio = new Audio("./sounds/crash.mp3");
    // audio.play();

    switch (pressed) {
        case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
            break;
        case "a":
         var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
            break;
        case "s":
         var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
            break;
         case "d":
         var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
            break;
         case "j":
         var audio = new Audio("./sounds/snare.mp3");
        audio.play();
            break;
        case "k":
         var audio = new Audio("./sounds/crash.mp3");
        audio.play();
            break;
         case "l":
         var audio = new Audio("./sounds/kick-bass.mp3");
         audio.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }

}

