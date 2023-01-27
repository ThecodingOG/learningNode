// // --------------------------------------------------------------
// // 01
// const path = require('path');

// // separator property
// // returns my platforms separator
// console.log(path.sep)
// // goto 02
// // --------------------------------------------------------------

// // --------------------------------------------------------------
// // 02
// const path = require('path');

// const filePath = path.join('/content', 'subfoler', 'test.txt')
// console.log(filePath)
// // goto 03
// // --------------------------------------------------------------

// // --------------------------------------------------------------
// // 03
// const path = require('path');

// const filePath = path.join('/content', 'subfoler', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)
// // goto 04
// // --------------------------------------------------------------

// --------------------------------------------------------------
// 04
const path = require("path");

const filePath = path.join("/content", "subfoler", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
// the path to send a resource is different machine to machine
// endpoint
// --------------------------------------------------------------
