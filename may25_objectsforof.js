const obj = {
  name: "Ambuj",
  class: "10",
  rollNo: "35",
  address: { city: "ranchi", state: "jharkhand" },
};
for (let x in obj) {
  console.log(x, obj[x], typeof x, typeof obj[x]);
}
