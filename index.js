//variable initialization
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your Name? ");

console.log("Hello "+ userName+ " Welcome to the game. ");
console.log("----------");
var newQues = readlineSync.question("Did you watched FRIENDS show? (yes/no) "); 
console.log("----------");
if(newQues === "yes"){
  console.log("ohh thats nice!! , You should try this game. ")
}
else{
  console.log("its alright! you can try this out for fun. ")
}
console.log("Your answer should be either A or B.");
console.log("---------");


function game(ques , ans){
  var userAnswer = readlineSync.question(ques);

 if(userAnswer.toUpperCase() === ans.toUpperCase()){
   console.log("right");
   score++;
 }
else{
   console.log("wrong");
}

console.log("Your current score is: "+ score);
}

var quizQues = [ {q: "Which character has a twin? \n A: Rache \n B: Phoebe \n ", 
a: "B" } , {
  q:"Who was Monica’s first kiss?  A: Chandler  B: Ross ", a: "B"
} , {
  q:"How many sisters does Joey have? \n A: 7 \n B: 6 \n", a: "A"
} , {
  q:"How many times has Ross been married? \n A: 2 \n B: 3 \n", a: "B"
} , {
  q:"What nickname did Monica’s dad give her? \n A: Little Shimonica \n B: Little Harmonica \n", a: "B"
} , {
  q:"What's the name of the dancer joey lived with? \n A: Janine \n B: Janice \n", a: "A"
}, {
  q:"Who got their own spinoff? \n A: Chandler \n B: Joey \n", a: "B"
} , {
  q:"What’s Phoebe’s sister’s name? \n A: Ursula \n B: Ariel \n", a: "A"
} , {
  q:"What is Joey’s fake name? \n A: Mike Haningen \n B: Ken Adams \n", a: "B"
} , {
  q:"What was the name of the millionaire Monica dated? \n A: John \n B: Pete \n", a: "A"
}];

for(var i=0; i<quizQues.length; i++){
  game(quizQues[i].q, quizQues[i].a);
  console.log("----------");
}
var highscore = 9;
if(highscore <= score){
  highscore = score;
  console.log("YAYY!! now " + userName + " has a highscore. Congratulations");
  console.log(userName+": "+ score)
}
else{
  console.log("Current highscore is: "+ highscore);
}
                 