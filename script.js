////////scoreboard functions
var points = 0;
document.getElementById('zero').onclick = reset;
document.getElementById('button-100A').ondblclick = add100;
document.getElementById('button-100B').ondblclick = add100;
document.getElementById('button-100C').ondblclick = add100;
document.getElementById('button-100D').ondblclick = add100;
document.getElementById('button-100E').ondblclick = add100;
document.getElementById('button-200A').ondblclick = add200;
document.getElementById('button-200B').ondblclick = add200;
document.getElementById('button-200C').ondblclick = add200;
document.getElementById('button-200D').ondblclick = add200;
document.getElementById('button-200E').ondblclick = add200;
document.getElementById('button-300A').ondblclick = add300;
document.getElementById('button-300B').ondblclick = add300;
document.getElementById('button-300C').ondblclick = add300;
document.getElementById('button-300D').ondblclick = add300;
document.getElementById('button-300E').ondblclick = add300;
document.getElementById('button-400A').ondblclick = add400;
document.getElementById('button-400B').ondblclick = add400;
document.getElementById('button-400C').ondblclick = add400;
document.getElementById('button-400D').ondblclick = add400;
document.getElementById('button-400E').ondblclick = add400;
document.getElementById('button-500A').ondblclick = add500;
document.getElementById('button-500B').ondblclick = add500;
document.getElementById('button-500C').ondblclick = add500;
document.getElementById('button-500D').ondblclick = add500;
document.getElementById('button-500E').ondblclick = add500;
//////////////Incorrect answer subtract score
///////////////////
////////////////////////
///////////////////////
document.getElementById('button-100A').ondblclick = sub100;
document.getElementById('button-100B').ondblclick = sub100;
document.getElementById('button-100C').ondblclick = sub100;
document.getElementById('button-100D').ondblclick = sub100;
document.getElementById('button-100E').ondblclick = sub100;
document.getElementById('button-200A').ondblclick = sub200;
document.getElementById('button-200B').ondblclick = sub200;
document.getElementById('button-200C').ondblclick = sub200;
document.getElementById('button-200D').ondblclick = sub200;
document.getElementById('button-200E').ondblclick = sub200;
document.getElementById('button-300A').ondblclick = sub300;
document.getElementById('button-300B').ondblclick = sub300;
document.getElementById('button-300C').ondblclick = sub300;
document.getElementById('button-300D').ondblclick = sub300;
document.getElementById('button-300E').ondblclick = sub300;
document.getElementById('button-400A').ondblclick = sub400;
document.getElementById('button-400B').ondblclick = sub400;
document.getElementById('button-400C').ondblclick = sub400;
document.getElementById('button-400D').ondblclick = sub400;
document.getElementById('button-400E').ondblclick = sub400;
document.getElementById('button-500A').ondblclick = sub500;
document.getElementById('button-500B').ondblclick = sub500;
document.getElementById('button-500C').ondblclick = sub500;
document.getElementById('button-500D').ondblclick = sub500;
document.getElementById('button-500E').ondblclick = sub500;
//////reset button
function reset() {
  points = 0;
  document.getElementById('number').innerHTML = points;
}
//////correct functions
function add100() {
  points = points + 100;
  document.getElementById('number').innerHTML = points;
}
function add200() {
  points = points + 200;
  document.getElementById('number').innerHTML = points;
}function add300() {
  points = points + 300;
  document.getElementById('number').innerHTML = points;
}function add400() {
  points = points + 400;
  document.getElementById('number').innerHTML = points;
}
///////incorrect functions
function add500() {
  points = points + 500;
  document.getElementById('number').innerHTML = points;
}
function sub100() {
  points = points - 100;
  document.getElementById('number').innerHTML = points;
}
function sub200() {
  points = points - 200;
  document.getElementById('number').innerHTML = points;
}function sub300() {
  points = points - 300;
  document.getElementById('number').innerHTML = points;
}function sub400() {
  points = points - 400;
  document.getElementById('number').innerHTML = points;
}
function sub500() {
  points = points - 500;
  document.getElementById('number').innerHTML = points;
}
////////////ONE HUNDRED QUESTIONS ///////////////////////////
//SPORTS MOVIES MUSIC HISTORY SCIENCE
////////SPORTS

$("#button-100A").click( function()
           {
  $("#button-100A").click(function(){
   $(this).prop('disabled', true);

var questionOneA = prompt("This was the name of Atlanta's NHL team\n\nA) Flyers \n\nB) Panthers \n\nC) Hawks \n\nD) Thrashers");
   if (questionOneA === "D"){
     add100();
       alert("That is correct!");
       }
       else {
         sub100();
        alert("That is incorrect.");

         }
           }
      );
});
// /////////MOVIES
$("#button-100B").click( function()
          {
  $("#button-100B").click(function(){
   $(this).prop('disabled', true);
var questionOneB = prompt("The snozzberries taste like snozzberries.\n\nA) Willy Wonka \n\nB) Super Troopers \n\nC) Alice in Wonderland \n\nD) Avengers");
   if (questionOneB === "B"){
     add100();
       alert("That is correct!");
       }
       else {
         sub100();
        alert("That is incorrect.");
         }
           }
      );
});
// /////////MUSIC
$("#button-100C").click( function()
          {
  $("#button-100C").click(function(){
   $(this).prop('disabled', true);
var questionOneC = prompt("Rockstar lifestyle, might dont make it...\n\nA) Ridin' dirty \n\nB) Lemonade \n\nC) Wasted \n\nD) Wheels on the bus");
   if (questionOneC === "C"){
      add100();
       alert("That is correct!");
       }
       else {
         sub100();
        alert("That is incorrect.");
         }
           }
      );
});
// //////HISTORY
$("#button-100D").click( function()
          {
  $("#button-100D").click(function(){
   $(this).prop('disabled', true);
var questionOneD = prompt("This was the last US state to gain its statehood\n\nA) Hawaii \n\nB) Alaska \n\nC) West Virginia \n\nD) New Mexico");
   if (questionOneD === "A"){
      add100();
       alert("That is correct!");
       }
       else {
         sub100();
        alert("That is incorrect.");
         }
           }
      );
});
//////// SCIENCE
$("#button-100E").click( function()
          {
  $("#button-100E").click(function(){
   $(this).prop('disabled', true);
var questionOneE = prompt("This is the study of living organisms\n\nA) Organology \n\nB) Sociology \n\nC) Sneakerology \n\nD) Biology");
   if (questionOneE === "D"){
      add100();
       alert("That is correct!");
       }
       else {
         sub100();
        alert("That is incorrect.");
         }
           }
      );
});
// ////////////TWO HUNDRED QUESTIONS ///////////////////////////
// //SPORTS MOVIES MUSIC HISTORY SCIENCE
// ////////SPORTS
$("#button-200A").click( function()
          {
  $("#button-200A").click(function(){
   $(this).prop('disabled', true);
var questionTwoA = prompt("This sport involves ice, brooms, and a rock\n\nA) Rockball \n\nB) Curling \n\nC) Hockey \n\nD) Figure Skating");
   if (questionTwoA === "B"){
     add200();
       alert("That is correct!");
       }
       else {
         sub200();
        alert("That is incorrect.");
         }
           }
      );
});
// /////////MOVIES
$("#button-200B").click( function()
          {
  $("#button-200B").click(function(){
   $(this).prop('disabled', true);
var questionTwoB = prompt("I'm making waffles!\n\nA) Wafflehouse \n\nB) Sharktales \n\nC) Shrek \n\nD) Finding Nemo");
   if (questionTwoB === "C"){
     add200();
       alert("That is correct!");
       }
       else {
         sub200();
        alert("That is incorrect.");
         }
           }
      );
});
// /////////MUSIC
$("#button-200C").click( function()
          {
  $("#button-200C").click(function(){
   $(this).prop('disabled', true);
var questionTwoC = prompt("I'm goin down down baby, yo' street in a Range Rover\n\nA) Hot In Herr \n\nB) Country Grammar \n\nC) Ride Wit Me \n\nD) In Da Club");
   if (questionTwoC === "B"){
     add200();
       alert("That is correct!");
       }
       else {
         sub200();
        alert("That is incorrect.");
         }
           }
      );
});
// //////HISTORY
$("#button-200D").click( function()
          {
  $("#button-200D").click(function(){
   $(this).prop('disabled', true);
var questionTwoD = prompt("Abraham Lincoln was this number president of the United States\n\nA) 1st\n\nB) 22nd \n\nC) 31st \n\nD) 16th");
   if (questionTwoD === "D"){
     add200();
       alert("That is correct!");
       }
       else {
         sub200();
        alert("That is incorrect.");
         }
           }
      );
});
// ////// SCIENCE
$("#button-200E").click( function()
          {
  $("#button-200E").click(function(){
   $(this).prop('disabled', true);
var questionTwoE = prompt("This is the most common element on Earth \n\nA) Nitrogen\n\nB) Oxygen \n\nC) Lead \n\nD) Carbon");
   if (questionTwoE === "B"){
     add200();
       alert("That is correct!");
       }
       else {
         sub200();
        alert("That is incorrect.");
         }
           }
      );
});
// ////////////THREE HUNDRED QUESTIONS ///////////////////////////
// //SPORTS MOVIES MUSIC HISTORY SCIENCE
// ////////SPORTS
$("#button-300A").click( function()
          {
  $("#button-300A").click(function(){
   $(this).prop('disabled', true);
var questionThreeA = prompt("The NBA logo is based on this Lakers legend \n\nA) Shaq\n\nB) Magic Johnson \n\nC) Jerry West \n\nD) Kobe Bryant");
   if (questionThreeA === "C"){
     add300();
       alert("That is correct!");
       }
       else {
         sub300();
        alert("That is incorrect.");
         }
           }
      );
});
// /////////MOVIES
$("#button-300B").click( function()
          {
  $("#button-300B").click(function(){
   $(this).prop('disabled', true);
var questionThreeB = prompt("I heard your mom goes out with SQUEAK \n\nA) American Pie\n\nB) Beerfest \n\nC) Dogma \n\nD) Baseketball");
   if (questionThreeB === "D"){
     add300();
       alert("That is correct!");
       }
       else {
         sub300();
        alert("That is incorrect.");
         }
           }
      );
});
// /////////MUSIC
$("#button-300C").click( function()
          {
  $("#button-300C").click(function(){
   $(this).prop('disabled', true);
var questionThreeC = prompt("Now I really love how your easy to stack but I really hate how your easy to crack \n\nA) She Thinks My Tractor's Sexy\n\nB) Red Solo Cup \n\nC) Chain Hang Low \n\nD) Roll Out");
   if (questionThreeC === "B"){
     add300();
       alert("That is correct!");
       }
       else {
         sub300();
        alert("That is incorrect.");
         }
           }
      );
});
// //////HISTORY
$("#button-300D").click( function()
          {
  $("#button-300D").click(function(){
   $(this).prop('disabled', true);
var questionThreeD = prompt("This company was the first company to call Ponce City Market its home  \n\nA) Macy's\n\nB) Belk \n\nC) Sears \n\nD) JCPenny");
   if (questionThreeD === "C"){
     add300();
       alert("That is correct!");
       }
       else {
         sub300();
        alert("That is incorrect.");
         }
           }
      );
});
// ////// SCIENCE
$("#button-300E").click( function()
          {
  $("#button-300E").click(function(){
   $(this).prop('disabled', true);
var questionThreeE = prompt("This was the first element scientifically discovered in 1649  \n\nA) Phosphorous\n\nB) Iron \n\nC) Titanium \n\nD) Magnesium");
   if (questionThreeE === "A"){
     add300();
       alert("That is correct!");
       }
       else {
         sub300();
        alert("That is incorrect.");
         }
           }
      );
});
// ////////////FOUR HUNDRED QUESTIONS ///////////////////////////
// //SPORTS MOVIES MUSIC HISTORY SCIENCE
// ////////SPORTS
$("#button-400A").click( function()
          {
  $("#button-400A").click(function(){
   $(this).prop('disabled', true);
var questionFourA = prompt("To this date, this is the only sport to be played in space  \n\nA) Cheerleading\n\nB) Baseball \n\nC) Basketball \n\nD) Golf");
   if (questionFourA === "D"){
     add400();
       alert("That is correct!");
       }
       else {
         sub400();
        alert("That is incorrect.");
         }
           }
      );
});
// /////////MOVIES
$("#button-400B").click( function()
          {
  $("#button-400B").click(function(){
   $(this).prop('disabled', true);
var questionFourB = prompt("I always tell the truth. Even when I lie.  \n\nA) Remember the Titans\n\nB) The Godfather \n\nC) Scarface \n\nD) James Bond");
   if (questionFourB === "C"){
     add400();
       alert("That is correct!");
       }
       else {
         sub400();
        alert("That is incorrect.");
         }
           }
      );
});
// /////////MUSIC
$("#button-400C").click( function()
          {
  $("#button-400C").click(function(){
   $(this).prop('disabled', true);
var questionFourC = prompt("Yeah, this album is dedicated to all the teachers that told me I'd never amount to nothin'  \n\nA) Big Poppa\n\nB) Dead Wrong \n\nC) Juicy \n\nD) Mo Money Mo Problems");
   if (questionFourC === "C"){
     add400();
       alert("That is correct!");
       }
       else {
         sub400();
        alert("That is incorrect.");
         }
           }
      );
});
// //////HISTORY
$("#button-400D").click( function()
          {
  $("#button-400D").click(function(){
   $(this).prop('disabled', true);
var questionFourD = prompt("This man was the first president of the US from the state of Georgia  \n\nA) George Bush\n\nB) George Washington \n\nC) Jimmy Carter \n\nD) Donald Trump");
   if (questionFourD === "C"){
     add400();
       alert("That is correct!");
       }
       else {
         sub400();
        alert("That is incorrect.");
         }
           }
      );
});
//////// SCIENCE
$("#button-400E").click( function()
          {
  $("#button-400E").click(function(){
   $(this).prop('disabled', true);
var questionFourE = prompt("This is the rarest blood type in humans  \n\nA) B-positive\n\nB) AB-negative \n\nC) O-positive \n\nD) AB-positive");
   if (questionFourE === "B"){
     add400();
       alert("That is correct!");
       }
       else {
         sub400();
        alert("That is incorrect.");
         }
           }
      );
});
// ////////////FIVE HUNDRED QUESTIONS ///////////////////////////
// //SPORTS MOVIES MUSIC HISTORY SCIENCE
// ////////SPORTS
$("#button-500A").click( function()
          {
  $("#button-500A").click(function(){
   $(this).prop('disabled', true);
var questionFiveA = prompt("This is the last year that an Atlanta pro sports team won a championship title  \n\nA) What Are Championships?\n\nB) 2017 \n\nC) 1995 \n\nD) 1999");
   if (questionFiveA === "C"){
     add500();
       alert("That is correct!");
       }
       else {
         sub500();
        alert("That is incorrect.");
         }
           }
      );
});
// /////////MOVIES
$("#button-500B").click( function()
          {
  $("#button-500B").click(function(){
   $(this).prop('disabled', true);
var questionFiveB = prompt("Oh, no, it wasn't the airplanes. It was beauty killed the beast\n\nA) Godzilla\n\nB) King Kong \n\nC) Beauty and the Beast \n\nD) Airplane");
   if (questionFiveB === "B"){
     add500();
       alert("That is correct!");
       }
       else {
         sub500();
        alert("That is incorrect.");
         }
           }
      );
});
// /////////MUSIC
$("#button-500C").click( function()
          {
  $("#button-500C").click(function(){
   $(this).prop('disabled', true);
var questionFiveC = prompt("Some will win, some will lose, some were born to sing the blues\n\nA) Ganster's Paradise\n\nB) Ridin' Dirty \n\nC) Don't Stop Believing \n\nD) Lights");
   if (questionFiveC === "C"){
     add500();
       alert("That is correct!");
       }
       else {
         sub500();
        alert("That is incorrect.");
         }
           }
      );
});
// //////HISTORY
$("#button-500D").click( function()
          {
  $("#button-500D").click(function(){
   $(this).prop('disabled', true);
var questionFiveD = prompt("Are you not entertained! Is this not why you are here\n\nA) Alice in Wonderland\n\nB) Gladiator \n\nC) Zoolander \n\nD) The Hunger Games");
   if (questionFiveD === "B"){
     add500();
       alert("That is correct!");
       }
       else {
         sub500();
        alert("That is incorrect.");
         }
           }
      );
});
// ////// SCIENCE
$("#button-500E").click( function()
          {
  $("#button-500E").click(function(){
   $(this).prop('disabled', true);
var questionFiveE = prompt("This layer of atmosphere is between the troposphere and the mesosphere  \n\nA) Circlesphere\n\nB) Exosphere \n\nC) Stratosphere \n\nD) Thermosphere");
   if (questionFiveE === "C"){
     add500();
       alert("That is correct!");
       }
       else {
         sub500();
        alert("That is incorrect.");
         }
           }
      );
});
//////////Final Question
$("#finalQuestion").click( function()
          {
  $("#finalQuestion").click(function(){
   $(this).prop('disabled', true);
var questionFinal = prompt("Wager as much of your score desired\n\n\nThis is the number of bones a giraffe has in its neck  \n\nA) 37\n\nB) 7 \n\nC) 76 \n\nD) 24");
   if (questionFinal === "B"){
       alert("That is correct! Please add wagered amount to your score");
       }
       else {
        alert("That is incorrect. Please subtract wagered amount from your score");
         }
           }
      );
});
