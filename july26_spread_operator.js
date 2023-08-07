let employee = {
       user: {
         address: {
           country: {
             state: {
               city: {
                 postOffice: {
                   pinCode: 208001,
                 },
               },
             },
           },
         },
       },
     };
     // ...
     // updating the poncode 208002
     //console.log("Employyee", employee);
     // I did not explain
     employee = {
       ...employee,
       user: {
         ...employee.user,
         address: {
           ...employee.user.address,
           country: {
             ...employee.user.address.country,
             state: {
               ...employee.user.address.country.state,
               city: {
                 ...employee.user.address.country.state.city,
                 postOffice: {
                   ...employee.user.address.country.state.city.postOffice,
                   pinCode: 560102,
                 },
               },
             },
           },
         },
       },
     };

     //console.log(employee);


     let employee1 = {
        name: "Vishal",
        college: "LPU",
        city: {
          name: "Kanpur",
          state: "UP",
          locality: "Vishnupuri", // need to change
          pincode: "208002",
          info: {
            id: "1234",
            dm: "Rajesh mittal",
          },
        },
      };

      console.log(employee1);
      employee1 = {
        ...employee1,
        college: "Newton",
        city: {
          ...employee1.city,
          locality: "Nawabganj",
          info: {
            ...employee1.city.info,
            dm: "Rimo",
          },
        },
      };

      console.log(employee1);