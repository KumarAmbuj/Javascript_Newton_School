//console.log("Array");
//
//let arr=[1,2,3,[4,5,6],true,false,"string inside array",function(){console.log('function inside array')}];
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[2]);
//console.log(arr[3]);
//console.log(arr[4]);
//console.log(arr[5]);
//console.log(arr[6]);
//console.log(arr[7]());

//const s="vishal";
//const arr=s.split('');
//console.log(arr);
//
//const sentence="hey i am vishal sharma";
//const arr2=sentence.split(" ");
//console.log(arr2);
//
//const commadata="Hey , I am vishal sharma , i am from uttar pradesh";
//const arr3=commadata.split(",");
//console.log(arr3);
//
//// join
//console.log("join method");
//const data=[1,2,3,4,5,6];
//const ss=data.join("-");
//console.log(ss);
//
//const sss= data.join("/");
//console.log(sss);


const data2 = [1, 2, 3, 4, 5, 6];
// in array if you did not given any value to given index js automatically set that index value to undefined
// data2[10] = 10;
// console.log(data2);

//push
//const pushlen = data2.push("hello");
//console.log(data2);
//console.log(pushlen);
//
//// pop
//const popvalue = data2.pop();
//data2.pop();
//data2.pop();
//data2.pop();
//console.log(popvalue);
//console.log(data2);
//
//// indexOf
//
//const data1234 = [1, 2, 3, 4, 5, 5, 67, [1, 2, 34], "hello"];
////
////// indexof function take value as parameter and it will return the index of that value if that value present inside tha rray else it will return -1
////// if there is multilpe value exist than it will print first ocuurenece
//console.log(data1234.indexOf(3));
//console.log("indexOf", data1234.indexOf(5, 5));
//console.log("indexOf", data1234.indexOf(55));
////
////console.log("indexof", data1234.indexOf([1, 2, 34]));
////// includes alsoe take value if value exist inside the array it will return true else it will return  false
//console.log("includes", data1234.includes("hello"));
//console.log("includes", data1234.includes("hell1"));


//const aa = [1, 2, 34];
//const bb = [3, 4, 5];
//
//const cc = aa.concat(bb);
//console.log(cc);
//
//// reverse
//console.log(aa.reverse());
//
//// toString
//
//console.log(aa.toString()); //  '34,2,1' join(',')
//
//const data123 = [1, 1, 1, 1, 12, 2, 2, 2, 2, 4, 5, 5, 5];
//console.log(data123.lastIndexOf(1)); //  3
//console.log(data123.indexOf(1)); // 0
//
//console.log(data123.lastIndexOf(12)); //  4
//console.log(data123.indexOf(12)); // 4


//const arr=[1,2,3,'hey','chill',5 ,'relax'];
//
//const arr2=[];
//for(let i=0;i<arr.length;i++){
//    if(!isNaN(parseInt(arr[i]))){
//        arr2.push(arr[i]);
//    }
//    else{
//        var obj={key:arr[i]};
//        arr2.push(obj);
//    }
//}
//console.log(arr2);

//const dogs = ["Fido", "Odie", "Oscar"];
//dogs.length = 1;
//console.log(dogs);
//const ele= ["1", "2", "3", "4"];
//let text = ele.toString(); 
//console.log(text)

var arr = [34, 234, 567, 4];  
arr.push('jacob',true,23.45) ; 
console.log(arr)
