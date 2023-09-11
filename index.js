var randomnumber1 =Math.random();
randomnumber1 = Math.floor(randomnumber1*6)+1;
var randomimg1="./images/"+"dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg1);

var randmonumber2=Math.random();
randmonumber2=Math.floor(randmonumber2*6)+1;
var randomimg2 ="./images/"+"dice"+randmonumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

if(randomnumber1>randmonumber2){
    document.getElementById("Header").innerHTML="Player 1 Wins";
}
else if(randomnumber1<randmonumber2){
    document.getElementById("Header").innerHTML="Player 2 Wins";
}
else{
    document.getElementById("Header").innerHTML="Draw";
}