const button = document.createElement("button");

button.textContent = "Click Me";

box3.appendChild(button);

//addEventListener

// button.addEventListener("click" , (e)=>{
//     console.log(e)
// } );

const eventCallback = (event) => {
  console.log(event.target);
};
// button.addEventListener("click", (e) => {
//   console.log(e.target); //
// });

button.addEventListener("click", eventCallback);

function button2(e) {
  console.log(e.target, "without e");
}