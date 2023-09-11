async function getUserData(searchValue) {
  const res = await fetch(
    `https://dummyjson.com/users/search?q=${searchValue}`
  );
  const result = res.json();
  result.then((resp)=>{

    console.log(resp);
  })
  
}
function handleInputChange(event) {
  getUserData(event.target.value);
}
