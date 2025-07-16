// Printing ovels
let str = "My name is kajal"
function vowels(str){
    const vowels ='aeiouAEIOU';
    for (let i=0; i< str.length; i++){
        if (vowels.includs(str[i])){
            console.log(str[i]);
        }
    } 
}