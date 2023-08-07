console.log('class work');

function myfunc(){
    var arr=['red','blue','yellow','black'];
    var num=Math.floor(Math.random()*(4));
    document.getElementById('colorchange').style.backgroundColor=arr[num];
}