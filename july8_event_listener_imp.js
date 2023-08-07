//function clickme(e) {
//    var count = 0;
//    alert("Hey Successfully clicked");
//  
//    
//       document.getElementById("button1").addEventListener("click", ()=>{console.log('inner event created by anonymous functio');});
//    
//  
//  }


//by anonumous function
function clickme(e) {
    
    alert("Hey Successfully clicked");
  
    
       document.getElementById("button1").addEventListener("click", function(){
        console.log("inner listener");
       });
    
  
  }

  

//by normal function
  //function clickme(e) {
  //  
  //  alert("Hey Successfully clicked");
  //
  //  
  //     document.getElementById("button1").addEventListener("click", func);
  //  
  //
  //}
//
  //function func(){
  //  alert("hey this is inner listener created");
  //}