const object = {
    name: "Vishal",
    city: {
      address: {
        pincode: "208002",
      },
    },
  };
  
  const pincode = object?.city?.address?.pincode;
  console.log(pincode);


 