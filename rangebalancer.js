// javascript code goes here
var totalval=parseInt(document.getElementById('max-sum-holder').getElementsByTagName('input')[0].value);

var vala=document.getElementById('range-a-holder').getElementsByTagName('input')[0].value;

document.getElementById('range-a-value').textContent=vala;

var valb=document.getElementById('range-b-holder').getElementsByTagName('input')[0].value;

document.getElementById('range-b-value').textContent=valb;

document.getElementById('sum').textContent=parseInt(vala)+parseInt(valb);

var vala=document.getElementById('range-a-holder').getElementsByTagName('input')[0].value;

document.getElementById('range-a-value').textContent=vala;

var valb=document.getElementById('range-b-holder').getElementsByTagName('input')[0].value;

document.getElementById('range-b-value').textContent=valb;

document.getElementById('sum').textContent=parseInt(vala)+parseInt(valb);

var a=document.getElementById('range-b-holder').getElementsByTagName('input')[0];

a.addEventListener('input',bhandler);
   
var b=document.getElementById('range-a-holder').getElementsByTagName('input')[0];

b.addEventListener('input',ahandler);

function ahandler(){
   var a=(document.getElementById('range-a-holder').getElementsByTagName('input')[0]);
   a=parseInt(a.value);
   
   document.getElementById('range-b-holder').getElementsByTagName('input')[0].setAttribute("max",totalval-a);

   document.getElementById('range-a-value').textContent=document.getElementById('range-a-holder').getElementsByTagName('input')[0].value;

   document.getElementById('sum').textContent=parseInt(document.getElementById('range-a-holder').getElementsByTagName('input')[0].value)+parseInt(document.getElementById('range-b-holder').getElementsByTagName('input')[0].value);

}

function bhandler(){
    var b=(document.getElementById('range-b-holder').getElementsByTagName('input')[0]);

   b=parseInt(b.value);
   
   document.getElementById('range-a-holder').getElementsByTagName('input')[0].setAttribute("max",totalval-b);

   document.getElementById('range-b-value').textContent=document.getElementById('range-b-holder').getElementsByTagName('input')[0].value;

   document.getElementById('sum').textContent=parseInt(document.getElementById('range-a-holder').getElementsByTagName('input')[0].value)+parseInt(document.getElementById('range-b-holder').getElementsByTagName('input')[0].value);
   
}

document.getElementById('max-sum-holder').getElementsByTagName('input')[0].addEventListener("click",func);

function func(){

totalval=parseInt(document.getElementById('max-sum-holder').getElementsByTagName('input')[0].value);
var a=document.getElementById('range-b-holder').getElementsByTagName('input')[0];

a.addEventListener('input',bhandler);
   
var b=document.getElementById('range-a-holder').getElementsByTagName('input')[0];

b.addEventListener('input',ahandler);


}