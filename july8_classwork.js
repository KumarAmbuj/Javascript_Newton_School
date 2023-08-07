console.log('hello');
document.getElementById('selectColor').addEventListener('change',(e)=>{
    document.body.style.backgroundColor=e.target.value;
});
