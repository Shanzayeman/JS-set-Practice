
const letters = new Set(["a", "b", "c"]);

const myIterator = letters.values();

let text = "";
for (const x of myIterator) {
  text += x + "<br>";
}
document.getElementById("demo").innerHTML = "the value is" + letters.size;
const letters1 = new Set();
const a = "a";
const b = "b";
const c = "c";
letters.add(a);
letters.add(b);
letters.add(c);
document.getElementById("demo1").innerHTML = "The set has " + letters1.size + " values.";
const letters2 = new Set(["a", "b", "c"]);
let text1 = "";
for (const x of letters2) {
  text1 += x + "<br>";
}
document.getElementById("demo2").innerHTML = text1;

const letters3 = new Set(["a","b","c"]);

document.getElementById("demo3").innerHTML = letters3 instanceof Set;