
var randomP1 = Math.random()
var randomP2 = Math.random();
var createRandomP1 = Math.floor(randomP1*6)
var createRandomP2 = Math.floor(randomP2*6)


let diceImg = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png",
                "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"]

console.log(createRandomP1+1);
console.log(createRandomP2+1);

//  document.getElementById("img1").src = diceImg[createRandomP1]
//  document.getElementById("img2").src = diceImg[createRandomP1]

 displayImage( "img1", createRandomP1)
 displayImage( "img2", createRandomP2)
 CalculateWinner (createRandomP1, createRandomP2)



 function displayImage( img, random)
 {
     document.getElementById(img).src = diceImg[random]
 }

 function CalculateWinner (p1, p2)
 {
    if (p1 > p2)
    {
        alert("p1 Win!");
    }else if (p1 == p2){
        alert("Tie!");

    }else {
        alert("p2 Win!");
    }
 }