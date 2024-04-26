const getData = document.getElementById("getData");
const container = document.getElementById("container");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
getData.addEventListener("click", () => {
  fetchApi();
});
function loader() {
  container.innerHTML = `<div class="loader">
    <img src="loader.gif" />
  </div>`;
}
async function fetchApi() {
  loader();
  let x = await fetch("https://dummyjson.com/users");
  x = await x.json();
  //console.log(x);
  let data = x.users;
  container.innerHTML = "";
  showData(data);
}

function showData(data) {
  data.forEach((val) => {
    container.innerHTML += `<div class="card">
    <div class="image">
      <img src=${val.image} />
    </div>
    <p>name: ${val.firstName + " " + val.lastName}</p>
    <p>Email: ${val.email}</p>
    </div>`;
  });
}

searchBtn.addEventListener("click", () => {
  let val = searchInput.value;
  if (val.length > 0) searchApi(val);
});

async function searchApi(val) {
  loader();
  let x = await fetch(`https://dummyjson.com/users/search?q=${val}`);
  x = await x.json();
  container.innerHTML = "";
  showData(x.users);
}
