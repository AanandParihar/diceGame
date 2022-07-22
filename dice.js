var number1 = Math.floor(Math.random()*6)+1;
var source1 = "dice"+number1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , source1);

var number2 = Math.floor(Math.random()*6)+1;
var source2 = "dice"+number2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , source2);

if(number1 > number2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(number1 < number2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}


