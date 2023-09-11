const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("search");
let url = "https://dummyjson.com/users/search?q=";
searchBtn.addEventListener("click", () => {
  let text = input.value;
  fun(url + text);
});

function fun(urll) {
  const response = fetch(urll);
  //const response = fetch("https://academics.newtonschool.co/api/v1/music/song");
  response.then((res) => {
    return res.json().then((response) => {
      var arr = response.users;
      console.log(response);
      display(arr);
    });
  });
}
let data = `<div class="item">
<div class="image">
  <img src="" />
</div>
<div>
  <p>name</p>
  <p>email</p>
  <p>company</p>
  <p>age</p>
  <p>eye color</p>
</div>
</div>`;
let container = document.getElementById("container");
function display(arr) {
  if (arr.length === 0) {
    container.textContent = "Sorry no data found";
  } else {
    container.textContent = "";
    arr.forEach((val) => {
      container.innerHTML += `<div class="item">
      <div class="image">
        <img src="${val.image}" />
      </div>
      <div>
        <p>${val.firstName} ${val.lastName}</p>
        <p>${val.email}</p>
       
      </div>
      </div>`;
    });
  }
}
