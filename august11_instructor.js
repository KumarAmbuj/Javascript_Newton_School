const start=document.getElementById('start');
let grid=document.getElementById('grid');
let bomb=[];
var number=[[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
]

var size=10;
var column=10;

start.addEventListener('click',()=>{
    //console.log('hello');
    document.getElementById('message').textContent="";
    document.getElementById('result').textContent="";
    grid.innerHTML="";
    for(var i=0;i<100;i++){
        const div=document.createElement('div');
        div.classList.add('item');
        div.setAttribute('id',i);
        grid.appendChild(div);
    }

    bomb=[];
        number=[[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
]
    for(let i=0;i<10;i++){
        var n=Math.floor(Math.random()*100);
        bomb.push(n);
        
        var row=Math.floor(n/10);
        var col=n%10;
        number[row][col]="bomb";

        if(row-1>=0 && number[row-1][col]!=='bomb'){

            number[row-1][col]++;

        }
        if(row-1>=0 && col+1<10 &&  number[row-1][col+1]!=="bomb"){
            number[row-1][col+1]++
        }
        if(col+1<10 && number[row][col+1]!=="bomb"){
            number[row][col+1]++;
        }
        if(row+1<10 && col+1<10 && number[row+1][col+1]!=="bomb"){
            number[row+1][col+1]++;
        }
        if(row+1<10 && number[row+1][col]!=="bomb"){
            number[row+1][col]++;
        }
        if(row+1<10 && col-1>=0 && number[row+1][col-1]!=="bomb"){
            number[row+1][col-1]++;
        }
        if(col-1>=0 && number[row][col-1]!=="bomb"){
            number[row][col-1]++;

        }
        if(row-1>=0 && col-1>=0  && number[row-1][col-1]!=="bomb"){
            number[row-1][col-1]++;
        }
    }
    console.log(bomb);
    console.log(number);
})



grid.addEventListener('click',(e)=>{

    let vis=[[false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false]
            ];
    let id=e.target.id;
    
    let k=parseInt(id);
    console.log(k,bomb.includes(k));
    let row=Math.floor(k/10);
    let col=k%10;

    if(bomb.includes(k)){
        for(let x of bomb){
            document.getElementById(x).textContent="B";
            document.getElementById(x).style.backgroundColor="black";
            document.getElementById(x).style.color="red";
        }
        const msg=document.getElementById('message');
        msg.textContent="You stepped into BOMB!!!";
        msg.style.color="red";
        msg.style.fontSize="40px";

        const res=document.getElementById('result');
        res.textContent="You can restart or reset the Game.";
        res.style.color="green";
        res.style.fontSize="30px";
    }
    else if(number[row][col]===0){
        
        fun(row,col,k,vis);

    }
    else{
        vis[row][col]=true;
        document.getElementById(k).textContent=number[row][col];
    }
    

})


function fun(row,col,k,vis){
    var queue=[];
    
    queue.push([row,col]);
    while(queue.length>0){
        [a,b]=queue.shift();
        if(vis[a][b]===true){
            continue;
        }
        vis[a][b]=true;
        
        if(number[a][b]===0){
            document.getElementById(a*10+b).textContent=0;
            if(a-1>=0 && number[a-1][b]!=='bomb' && vis[a-1][b]===false){

                queue.push([a-1,b]);
    
            }
            if(a-1>=0 && b+1<10 &&  number[a-1][b+1]!=="bomb" && vis[a-1][b+1]===false){
                queue.push([a-1,b+1]);
            }
            if(b+1<10 && number[a][b+1]!=="bomb" && vis[a][b+1]===false){
                queue.push([a,b+1]);

            }
            if(a+1<10 && b+1<10 && number[a+1][b+1]!=="bomb" && vis[a+1][b+1]===false){
                queue.push([a+1,b+1]);
            }
            if(a+1<10 && number[a+1][b]!=="bomb" && vis[a+1][b]===false){
                queue.push([a+1,b]);
            }
            if(a+1<10 && b-1>=0 && number[a+1][b-1]!=="bomb" && vis[a+1][b-1]===false){
                queue.push([a+1,b-1]);
            }
            if(b-1>=0 && number[a][b-1]!=="bomb" && vis[a][b-1]===false){
                queue.push([a,b-1]);
    
            }
            if(a-1>=0 && b-1>=0  && number[a-1][b-1]!=="bomb" && vis[a-1][b-1]===false){
                queue.push([a-1,b-1]);
                
            }

            
        }
        else{
            document.getElementById(a*10+b).textContent=number[a][b];
        }
    }
}

const reset=document.getElementById('reset');
reset.addEventListener('click',()=>{
    grid.textContent="";
    document.getElementById('message').textContent="";
    document.getElementById('result').textContent="";

})



