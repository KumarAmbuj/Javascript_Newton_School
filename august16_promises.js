const impromise = new Promise((resolved, rejected) => {
    resolved("Hey"); // this will be consider
    rejected("Hey"); // this will be ignore
    resolved("1234"); //  this will be ignore
  });
  console.log(impromise);
  // Immediate rejected promise
  const impromise1= new Promise((resolved, rejected) => {
    rejected("Hey"); // this will be consider
    resolved("hey"); // this will be ignore
  });
  console.log(impromise1);