const getAllProducts = () => {
  const response = fetch("https://dummyjson.com/products");
  response
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

getAllProducts();
//
//  //// diff between json and object
//const data = {
//  name: "Vishal",
//};

//   const getAllProducts = () => {
//     // fetch is browser api which return promises everytime
//     // by default Request method of fetch is GET
//     const response = fetch("https://dummyjson.com/products");
//     // response will be here promise i need promise chaining chaining for resolving
//     response.then((res) => {
//       // here res value is not in json format to convert it into json format we need res.json() function , this json() return promises we need to resolved it agai using
//       //  promise chaining
//       return res.json().then((response) => {
//         console.log("response", response);
//       });
//     });
// };

getAllProducts();
