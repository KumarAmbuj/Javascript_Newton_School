console.log('hello');

const btn=document.getElementById('addtoast');

btn.addEventListener('click',func);

function func(){
    
    var msg=document.getElementById('messagebox').value;
    if(msg.length>0){
        var div=document.createElement('div');
        
        div.classList.add('toast');
        div.textContent=msg;

        if(document.getElementById('cancellable').checked){
            
            var span=document.createElement('span');
            span.classList.add('cross');
            span.textContent="X";
            div.appendChild(span);
            
        }

        if(document.getElementById('success').checked){
            div.style.backgroundColor="rgb(24,228,58)";
        }
        if(document.getElementById('error').checked){
            div.style.backgroundColor="red";
        }

        document.getElementById('toastbox').appendChild(div);

    }
}

document.querySelector(".toastbox").addEventListener('click',cancel)
function cancel(e){
    if(e.target.textContent=="X"){
    e.target.parentElement.style.display="none";
    }
}

document.getElementById('removeall').addEventListener('click',()=>{
    document.getElementById('toastbox').innerHTML="";
})