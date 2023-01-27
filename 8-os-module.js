// // ------------------------------------------------------------------------
// // 01
// const os = require('os');
// // this is searching for a built in module
// // goto 02
// // ------------------------------------------------------------------------

// // ------------------------------------------------------------------------
// // 02
// const os = require('os');
// const user = os.userInfo()
// console.log(user)
// // goto 03
// // ------------------------------------------------------------------------

// // ------------------------------------------------------------------------
// // 03
// const os = require('os');
// // tp get system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`)
// // goto 04
// // ------------------------------------------------------------------------

// ------------------------------------------------------------------------
// 04
const os = require("os");
const currentOS = {
  name: os.type(),
  release: os.release(),
  // to check RAM availabe and total
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
// end
// begin 9-path-module.js
// ------------------------------------------------------------------------
