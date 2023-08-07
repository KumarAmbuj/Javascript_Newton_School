console.log('hello bhai aaj closure padhenge')


//function a(){
//    let firstname="vishal";
//    return function b(){
//        console.log(firstname);
//    }
//}
//
//const func=a();
//func();


//function sum(a){
//    return function sum1(b){
//        return function sum2(c){
//            return a+b+ c;
//        }
//    }
//
//}
//console.log(sum(12)(12)(2));



function generateOrder() {
    let count = 0;
    return function func() {
      count++;
      return "Total orders = " + count;
    };
  }
  
 
  const func1 = generateOrder();
 
  func1();
  //console.log(func1());
  //console.log(func1());
  //console.log(func1());
  //console.log(func1());
  //console.log(func1());
  //console.log(func1());
  //console.log(func1());


  var a = "hello";
  console.log(a[0]-'a');
var sum = 0;
for(var i = 0; i < a.length; i++) {
  sum += (a[i] - 'a');
}
console.log(sum);
  