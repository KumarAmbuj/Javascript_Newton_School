console.log("scope");


//var a = 40;
//
//function call() {
//  a = 60;
//  var b = 500;
//  console.log(a);
//}
//
//call();
//console.log(b);

//if(true){
//    var firstname="vishal";
//    let lastname="sharma";
//    const city="kanpur";
//
//    console.log(firstname);
//    console.log(lastname);
//    console.log(city);
//}
//
//console.log(firstname);
//console.log(lastname);
//console.log(city);


//var a=10;
//function varScope(){
//    var b=20;
//    let c=30;
//    const d=40;
//    console.log(a);
//    console.log(b);
//    console.log(c);
//    console.log(d);
//}
//varScope();
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);

var x = 3;

var foo = {

    x: 2,

    baz: {

        x: 1,

        bar: function() {

            return this.x;

        }

    }

}



var go = foo.baz.bar;



alert(go());

alert(foo.baz.bar());