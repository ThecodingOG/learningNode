// const john = "john";
// const peter = "peter";
// const secret = 'SUPER SECRET'

// console.log(module); // we get an object so we share to the exports object

// ------------------------------------------------------------------------
// 01

// local
const secret = "SUPER SECRET";
// share
const john = "john";
const peter = "peter";

module.exports = { john, peter }
// goto modules.js and access them with require//