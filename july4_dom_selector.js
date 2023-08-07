console.log('dom');
const elementByclass = document.getElementsByClassName("box1");
console.log(elementByclass, "elementByclass");

const documentsv = document;
console.log(documentsv);

// querySelector('div') => it will return the first element that matches the div slector

const getByQuery1 = document.querySelector("div");
console.log(getByQuery1, "getByQuery1");

// it will serch in whole dom and return the first match value

const getByAllQuery1 = document.querySelectorAll("div");
// argumewnts
console.log(getByAllQuery1, "getByQuery1");

const getByAllQuery2 = document.querySelectorAll(".abc"); // id #idvalue

console.log(getByAllQuery2, "getByAllQuery2");

const getByAllQuery3 = document.querySelectorAll("#box_2"); // id #idvalue

console.log(getByAllQuery3, "getByAllQuery3");

// selecting element through attributes // i will take it later