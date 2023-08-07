console.log('hello');

function Database(){
    const obj={};
    this.appendInRedis=function(key,value){
       obj[key]=value;
       
    }

    this.updateInRedis=function(key,value){
        obj[key]=value;
    }

    this.deleteRedis=function(key){
        delete obj[key];
    }

    this.read=function(key){
        return obj[key];
    }
    
}


const obj1=new Database();
obj1.appendInRedis("firstname","ambuj");
obj1.updateInRedis("firstname","namam");
console.log(obj1.read("firstname"));