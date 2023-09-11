function callGrandChild(e) {
  console.log(e);
  alert("I am grand child");
}

const callChild = (event) => {
  console.log("child=>", event);
  alert("I am  child");
};
document.getElementById("child").addEventListener("click", callChild);

document.getElementById("grandparent").addEventListener("click", (e) => {
  console.log(e);
  alert("Grand Parent");
});
