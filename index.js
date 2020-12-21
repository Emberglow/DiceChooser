var randomNumberOne = Math.floor(Math.random()*6);
randomNumberOne += 1;

var randomNumberTwo = Math.floor(Math.random()*6);
randomNumberTwo += 1;

var leftDicePath = "images/dice"+randomNumberOne+".png";
var rightDicePath = "images/dice"+randomNumberTwo+".png";


document.querySelector(".img1").setAttribute("src", leftDicePath);
document.querySelector(".img2").setAttribute("src", rightDicePath);


if(randomNumberOne > randomNumberTwo){
  document.querySelector("h1").textContent = "Player 1 Wins!"
}
else if(randomNumberTwo>randomNumberOne) {
  document.querySelector("h1").textContent = "Player 2 Wins!"
} else {
  document.querySelector("h1").textContent = "It's a Draw!"
}
