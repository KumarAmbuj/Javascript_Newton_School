console.log("dom");
console.log("DOM Tutorial");

const rootElement = document.getElementById("root");

rootElement.innerText = "Hey Dom Tutorial";
rootElement.style.fontSize = "34px";
rootElement.style.color = "white";
rootElement.style.margin = "auto";
rootElement.style.width = "100%";
rootElement.style.textAlign = "center";

rootElement.style.border = "2px solid black";
rootElement.style.backgroundColor = "black";


console.log(rootElement, "hey");


const root2 = document.createElement("div"); //Node
const header=document.createElement("h1");
const Name=document.createElement("h4");
root2.innerText = "Hey this is dynamically added div";
root2.style.fontSize = "34px";
root2.style.color = "red";
root2.style.margin = "auto";
root2.style.width = "100%";
root2.style.textAlign = "center";

console.log(root2, "root2");
header.innerText="this is header dynamically";
Name.innerText="Kumar Ambuj";

root2.appendChild(header);
root2.appendChild(Name);


document.body.appendChild(root2);