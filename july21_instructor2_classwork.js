console.log('hello');
var count =0;

var addTask=document.getElementById('addtask');
addTask.addEventListener('click',()=>{
     var val=document.getElementById('input').value;
     count++;
     var msg=`<div class="taskBox" id="${count}" draggable="true">${val}<button class="expand" id="exp${count}">exp</button></div>
     `
     document.getElementById('assigned').innerHTML+=msg;

})
var last;
document.querySelector('.task').addEventListener('dragstart',(e)=>{
    last=e.target;
    
    //alert(e.target.id);
    //alert(e.target.parentElement.parentElement.id);
})


document.querySelector('.task').addEventListener('dragover',(e)=>{
    e.preventDefault();
    //alert('hi');
})

document.querySelector('.task').addEventListener('drop',(e)=>{
    var id=e.target.lastElementChild.id;
    var val = last.textContent;
    val=val.slice(0,val.length-3);
    //alert(val);

    var msg=`<div class="taskBox" id="${last.id}" draggable="true">${val}<button class="expand" id="exp${count}">exp</button></div>
    `
    document.getElementById(id).innerHTML+=msg;
    last.remove();
})

