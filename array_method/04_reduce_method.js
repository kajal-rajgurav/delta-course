let arr=[2,3,67,7,6,5];
// let max=-1;
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max);
let ans=arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else
    return max;
})
console.log(ans);