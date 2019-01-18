const fs = require('fs');

console.time("runtime");

console.log("writing to text.txt...");
fs.writeFileSync("test.txt", "eae meu brabao", "utf8", () => {});

console.log("reading text.txt...");
let file = fs.readFileSync("test.txt");

console.log(file.toString());

console.log("modifying test.txt...");
fs.appendFileSync("test.txt", "\ntamo dando o famoso append", "utf8", () => {});

console.log("reading text.txt...");
file = fs.readFileSync("test.txt");

console.log(file.toString());

console.log("deleting test.txt");
fs.unlink("test.txt", () => {});

console.log("Job done.");
console.timeEnd("runtime");

