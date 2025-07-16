// take a input marks from user and assign grade based on users marks.if user makrs are greater than 
// 90 then give A grade ,if user marks greater than 80and less than eual to 90 B grade ,if mrks greater than 35 and  less than  equal to
// 80 then gradeC otherwise faild, num should not be grrater than 100
// 1. create a variable to strore user input 
// 2. then write if statement to check the num should not greater than 100
// 3. then write a switch satement :
//     case1:num<90;(print grade A)
//     case2:num
//     case3:


let marks= parseFloat (prompt("Enter Your Marks"));
if(marks > 100){
   alert("number should be less than 100")
   location.reload
}else{
 switch (true){
    case (marks > 90):
       alert("grade: A")
        break;
    case (marks > 80 && marks <= 90):
           alert("grade: B");
        break;
    case (marks>=35 && marks<=80):
          alert("grade :C") 
          break;     
       default:
        alert("you are faild")           
                
 }
}
