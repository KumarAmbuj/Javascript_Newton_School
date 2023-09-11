let url = "https://dummyjson.com/users/search?q=";
let result = document.getElementById("result");
const parent = document.getElementById("parent");
parent.addEventListener("click", (e) => {
  //console.log(e.target);
  result.innerHTML = "";
  const response = fetch(url + e.target.id);
  response.then((resp) => {
    resp.json().then((data) => {
      var arr = data.users;
      console.log(arr);
      arr.forEach((val) => {
        result.innerHTML += `<div class="data" id=${val.id}>
        <img src="${val.image}" />
        <p>${val.firstName}</p>
      </div>`;
      });
    });
  });
  //e.stopPropagation();
  //console.log(url + e.target.id);
});

result.addEventListener("click", (e) => {
  console.log(e.target.id);
});
