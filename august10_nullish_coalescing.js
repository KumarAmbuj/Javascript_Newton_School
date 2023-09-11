const name = "Vishal" || "Ram";
const name1 = "" || null || 0 || 1 || 2 || 4;
const data11 = null || undefined || false || "Hello";
console.log("data11", data11);

//  returns the first value whioch is defined  not defined (null , undefined)

const nullish = undefined ?? "a" ?? 0 ?? false ?? "Hello";
console.log("nullish", nullish);

//const data112 = null ?? undefined ?? false;
//const aa = undefined ?? null ?? undefined;
//console.log(aa);


const a=undefined || 0 || false ;
console.log(a);


const b=undefined || 0 || false || null;
console.log(b);


const c=""??0??false;
console.log(c);

const d=false??0??false;
console.log(d);

const e=undefined??null??false??0??false;
console.log(e);


const f=undefined??null??undefined;
console.log("f",f);

const g=undefined??null??undefined??null;
console.log("g",g);
