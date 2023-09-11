console.log("hello");

const url = "https://real-puce-turtle-tam.cyclic.cloud/stock/stock-market-caps";
function getValue(val) {
  const response = fetch(url);
  response.then((res) => {
    return res.json().then((resp) => {
      let arr = resp;
      arr.sort((a, b) => Number(b["market-cap"]) - Number(a["market-cap"]));
      //console.log(arr);
      getRequiredData(arr.slice(0, val));
    });
  });
}

async function getRequiredData(sorted) {
  const data = await fetch(
    `https://real-puce-turtle-tam.cyclic.cloud/stock/stock-prices?symbols=${JSON.stringify(
      sorted
    )}`
  );
  const result = await data.json();
  displayData(sorted, result);
}

function displayData(sorted, result) {
  let resultArr = [];
  sorted.forEach((val) => {
    const newarr = result.filter((vall) => vall.symbol === val.symbol);
    const newObj = newarr[0];
    newObj["market-cap"] = val["market-cap"];

    resultArr.push(newObj);
  });

  for (let x of resultArr) {
    console.log(x);
  }
}

getValue(3);
