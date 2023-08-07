var arr=["nature.jpg","flipkart.png","img1.jpg","img3.jpg","twitter.png"]

var c=0;
var n=arr.length;

const prev=document.getElementById('prev');
const next=document.getElementById('next');

prev.addEventListener('click',()=>{
    c=(c+1)%n;
    document.querySelector("img").setAttribute("src",arr[c]);
    document.querySelector("img").style.transitionDelay = "1s";

});

next.addEventListener('click',()=>{
    c=(c-1+n)%n;
    document.querySelector("img").setAttribute("src",arr[c]);

});


