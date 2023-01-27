// const { readfileSync } = require('fs');
// const fs = require('fs');
// fs.readFileSync

// // ------------------------------------------------------------------------
// // 01
// const { readfileSync, writeFileSync } = require("fs");
// const fs = require("fs");
// fs.readFileSync;
// // GoTo 2
// // ------------------------------------------------------------------------

// // -------------------------------------------------------
// // 02
// const { readFileSync, writeFileSync } = require("fs");
// // readFileSync is a method that requires two parameters, a path and the encoding
// const first = readFileSync("./content/first.txt" , 'utf8');
// const second = readFileSync("./content/second.txt", 'utf8');
// console.log(first,second)
// // GoTo 3
// // ----------------------------------------------------

// // -------------------------------------------------------
// // 03
// const { readFileSync, writeFileSync } = require("fs");
// const first = readFileSync("./content/first.txt" , 'utf8');
// const second = readFileSync("./content/second.txt", 'utf8');

// writeFileSync('./content/results-sync.txt', `Here is the result ${first} , ${second}`)
// // this creates a new file if does not exist or overwrites
// // GoTo 4
// // ----------------------------------------------------

// // -------------------------------------------------------
// // 04
// // to overwrite
// const { readFileSync, writeFileSync } = require("fs");
// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync(
//   "./content/results-sync.txt",
//   `Here is the result ${first} , ${second}`,
//   { flag: "a" }
// );
// // this creates a new file if does not exist or overwrites
// // GoTo start 11-fs-async
// // ----------------------------------------------------

// ------------------------------------------------------------------------
// 05
const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/results-sync.txt",
  `Here is the result ${first} , ${second}`,
  { flag: "a" }
);
console.log('done with this tast')
console.log('starting the next one')
// JS is reading this synchronously so if the file takes long to open, your application is pretty much down and no other user can use this application
// That is why we use asychronous
// GoTo 11-fs-async 04
// -------------------------------------------------------------------------
