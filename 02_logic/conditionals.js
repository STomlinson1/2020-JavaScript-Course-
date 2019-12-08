/* 
Conitionals
*/
//example 1
if(1 === 1){
  console.log("It's True!");
}
//example 2
let rating = 3;
if(rating === 3){
  console.log("you are a superstar!");
}
//example 3
let num = 38;
if(num % 2 !== 0){
  console.log('Odd Number');
}

/*  
example 4 
Performance review
3 - superstar
2 - meets expectations
1 - needs improvement
anything else - ...
*/
rating = 2;
if (rating === 3) {
  console.log("You are a superstar");
}else if(rating === 2){
  console.log("meets expectations");
}else if(rating === 1){
  console.log("needs improvement");
}else{
  console.log("invalid rating");
}

// Example 5
let highScore = 1430;
let userScore = 1600;

if (userScore > highScore) {
  console.log(`Congrats, you have a new high score of ${userScore}`);
  highScore = userScore;
}else{
  console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}
