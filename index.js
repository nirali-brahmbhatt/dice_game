var randomNumber1 =Math.floor(Math.random()*6)+1;

var randomCardImage1 = "dice"+randomNumber1+".png";

var randomImageSource1 = "images/" +randomCardImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if(randomNumber1<randomNumber2) {
document.querySelector("h1").innerHTML="Player2 wins!";
}
if(randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML="Draw!";
}
