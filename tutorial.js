public static long xorFromAToB(long a, long b) {
  
  long xorB = xorFrom0ToN(b);
  long xorAminus1 = xorFrom0ToN(a - 1);

  
  return xorB ^ xorAminus1;
}

public static long xorFrom0ToN(long n) {
  if (n % 4 == 0) {
      return n; 
  } else if (n % 4 == 1) {
      return 1; 
  } else if (n % 4 == 2) {
      return n + 1; 
  } else {
      return 0; 
  }
}
}

console.log("start");

setTimeout(() => {

console.log("setTimeout");

}, 0);

Promise.resolve().then(() => {

console.log("resolve");

});

console.log("end");

const promise = new Promise((resolve, reject) => {

console.log(1);

setTimeout(() => {

console.log("timerStart");

resolve("success"); //

console.log("timerEnd");

}, 0);

console.log(2);

});

promise.then((res) => {

console.log(res);

});

setTimeout(() => {

console.log("Are!!");

}, 0);

console.log(4);



app.post("/comment", async (req, resp) => {
  try{let blog = new Blog(req.body);
    let result = await blog.save();
    if(result){
      resp.status(200).json("Comment successfully added")
    }
    else{
      resp.status(400).json("something went wrong!!!")
    }
  }
    catch(error){
      resp.status(500).json("Internal server error")
    }
  
  
});
