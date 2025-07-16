const max = prompt("enter your number");
const random =Math.floor(Math.random()*max)+1;
let guess=prompt("guess the correct number");
while(true){
    if(guess=="quit"){
        console.log("user the quit the game");
     break;
    }
    if(guess==random){
        console.log("your guess is correct ,congrats!! the random number is:",random);
        break;
    }
    else if(guess<random){
    guess=prompt("hint:your guess is to small,please try again");
    }else{
    guess=prompt("hint:your guess is to large,please try again");
    }
}
