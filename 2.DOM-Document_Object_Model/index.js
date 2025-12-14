

QuerySelector

//Access inside html -> body -> querySelector(ul) -> lastIndexli -> change
var list3 = document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Cyrus"

document.getElementsByTagName("li");
// HTMLCollection [<li class="list">, <li class="list">, <li class="list">] (3)

document.getElementsByTagName("li")[2].style.color="purple"
//turns the 3rd li to purple

//recognize as array desipite being th eonly one
document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color="blue"

//GRab individual by using id
document.getElementById("title")
document.getElementById("title").innerHTML = "Bye"
//OR by add # like css we can query specific
document.querySelector("#title")


//Practice with this more.....
document.querySelector("li.item")
//What id you want all object that macth it?
document.querySelectorAll("li.item")


