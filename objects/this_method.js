const student={
    name:"kajal",
    age:23,
    eng:78,
    math:56,
    marathi:89,
    getAvg(){
        let avg= (this.eng+this.math+this.marathi)/3;
       console.log(avg)
    }
}