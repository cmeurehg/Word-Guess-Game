$(document).ready(function(){
    //Iam creating a button to start the game.  I have not styled anything, just trying to get functionality going
var button = $("<button>");
button.appendTo($("#button"));

//Now I create a function so that evetytime the button is pressed a random word from my theme is generated               
$("#button").on("click", function (){

var martialArts = ["JiuJitsu", "Judo", "Karate", "TaeKwonDo", "KungFu", "KravMaga", "NipponKempo", "Systema", "WingTsun", "MuayThai"];
var martialArtIndex = Math.floor(Math.random()*martialArts.length);
var playWord = martialArts[martialArtIndex];
console.log(playWord);

//I am now creating a <span> for every letter of the playWord so I can manipulate them with styling and match them individually     
for(i=0; i<playWord.length; i++){
var span = $("<span>").addClass("span-color span-content span-shape font-state");
span.html(playWord[i]);
span.appendTo($("#hidden-word-place"));
}


//I now create a prompt to allow the player to input a letter    
for(i=0; i<playWord.length+2; i++){
var guess = prompt("Choose a letter");

//Here I have been experimenting with RegExp to get the letter matches, but having trouble inserting variables in RegExp
//var regExp = new RegExp("playWord");   this is not working, does not recognize the RegExp
//console.log(/guess/.test("playWord"));   always returns 'false'

//Here I'm trying to compare the guess letter to an existing letter as an alternative matching method.

if (playWord[0]===guess){
console.log(playWord[0]);
} else if (playWord[1]===guess){
console.log(playWord[1]);
}else if (playWord[2]===guess){
console.log(playWord[2]);
}else if (playWord[3]===guess){
console.log(playWord[3]);
}else if (playWord[4]===guess){
console.log(playWord[4]);
}else if (playWord[5]===guess){
console.log(playWord[5]);
}else if (playWord[6]===guess){
console.log(playWord[6]);
} else if (playWord[7]===guess){
console.log(playWord[7]);
}else if (playWord[8]===guess){
console.log(playWord[8]);
}else if (playWord[9]===guess){
console.log(playWord[9]);
}else {
alert("Try again!");

};

//Still I am not able to locate the match within an [i] number and write it there.  Guesses are logged in any order.


}
});
    

//My apologies for not styling anything at all.


})