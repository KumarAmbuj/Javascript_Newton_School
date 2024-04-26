console.log("hello");
document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent");
  },
  true
);
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("parent");
  },
  true
);
document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  true
);
document.getElementById("grandchild").addEventListener(
  "click",
  () => {
    console.log("grandchild");
  },
  true
);

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("grandparent");
});
document.getElementById("parent").addEventListener("click", () => {
  console.log("parent");
});
document.getElementById("child").addEventListener("click", () => {
  console.log("child");
});
document.getElementById("grandchild").addEventListener("click", () => {
  console.log("grandchild");
});
