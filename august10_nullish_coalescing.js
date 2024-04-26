// || returns first truthy value

const name = "Vishal" || "Ram";
const name1 = "" || null || [] || 0 || 1 || 2 || 4;
const data11 = null || undefined || false || "Hello";
console.log("name1", name1);
console.log("data11", data11);

//  returns the first value whioch is defined  not defined (null , undefined)

const nullish = undefined ?? null ?? 0 ?? false ?? "Hello";
console.log("nullish", nullish);

//const data112 = null ?? undefined ?? false;
//const aa = undefined ?? null ?? undefined;
//console.log(aa);

const a = undefined || 0 || false;
console.log("a", a);

const b = undefined || 0 || false || null;
console.log("b", b);

const c = "" ?? 0 ?? false;
console.log("c", c);

const d = false ?? 0 ?? false;
console.log("d", d);

const e = undefined ?? null ?? false ?? 0 ?? false;
console.log("e", e);

const f = undefined ?? null ?? undefined;
console.log("f", f);

const g = undefined ?? null ?? undefined ?? null;
console.log("g", g);
