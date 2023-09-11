function handleCard() {
  window.location =
    "https://www.zeptonow.com/pn/amul-malai-paneer-fresh/spid/7a496806-ae83-499f-be30-111a416c9a0d?sid=21d42ce9-9a73-428f-89ef-75323784c3b8&pvid=54099eb2-2d08-4013-a822-a3eebc72f19f";
}

function addButton(e) {
  e.stopPropagation();
  alert("Item Added in cart successfully!!!");
}

function checkBoxHandler(e) {
  e.stopPropagation();
  e.preventDefault();
}

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise

  .then(function () {
    console.log("Success 1");
  })

  .then(function () {
    console.log("Success 2");
  })

  .then(function () {
    console.log("Success 3");
  })

  .catch(function () {
    console.log("Error 1");
  })

  .then(function () {
    console.log("Success 4");
  })

  .then(function () {
    console.log("Success 5");
  })
  .catch(function () {
    console.log("Success 8");
  })
  .then(function () {
    console.log("Success 9");
  });
