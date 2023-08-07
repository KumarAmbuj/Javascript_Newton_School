console.log('adding and removing eventlistener');

document.getElementById('button1').addEventListener("click",button1func);


function button1func(){
    console.log("button 1 event listener function");

    document.getElementById('button2').addEventListener('click',button2func);
}

function button2func(){
    console.log('button 2 event listener function')
   document.getElementById('button1').removeEventListener('click',button1func);
}