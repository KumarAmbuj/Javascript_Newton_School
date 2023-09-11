const displayProduct = (productList) => {
  console.log(productList);
  const container = document.getElementById("container");
  productList?.map((product) => {
    const div = document.createElement("div");
    div.innerHTML = `<div style="display:flex ; flex-direction:column ; border:2px solid blue ; border-radius:12px ;width:250px; padding:10px; min-height:300px;max-height:20px">
      <img  class = 'img' src= ${product?.images[0]}>
      <div class= 'title'>${product.title}</div>
      <div class= 'description'>${product.description}</div>
      <div class= 'price'>${product.price}</div>
    </div>`;
    container.appendChild(div);
  });
};

// fetch is browser api which return promises everytime
// by default Request method of fetch is GET
const getAllProducts = () => {
  const response = fetch("https://dummyjson.com/products");
  response.then((res) => {
    // here res value is not in json format to convert it into json format we need res.json() function , this json() return promises we need to resolved it agai using
    //  promise chaining

    //console.log("before json()", res);
    return res.json().then((response) => {
      console.log("response", response);
      console.log("after response", response);
      displayProduct(response?.products); // here response.products is list of product array
    });
  });
};

getAllProducts();
