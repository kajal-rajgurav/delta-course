// take a input number  from user if the num is divisible by 2 then print even number 
// if num is not div by 2 then print odd if entered input not num then print not num.

let num=prompt("enter a your value")
if(num%2==0){
    console.log("even number")
}
else if(typeof num!=Number){
    console.log("please enter number")
}
else{
    console.log("odd number")
}
