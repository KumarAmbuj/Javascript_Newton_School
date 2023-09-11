class Newton{
    static count=0;
    constructor(){
       Newton.count++;
    }
}

const obj=new Newton();
const obj1=new Newton();

console.log(Newton.count);