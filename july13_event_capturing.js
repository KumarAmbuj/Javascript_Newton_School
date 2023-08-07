
console.log('hello');
document.getElementById('grandparent').addEventListener('click',()=>{console.log('grandparent');},true);
document.getElementById('parent').addEventListener('click',()=>{console.log('parent');},true);
document.getElementById('child').addEventListener('click',()=>{console.log('child');},true);
document.getElementById('grandchild').addEventListener('click',()=>{console.log('grandchild');},true);
