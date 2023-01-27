// Modules

// these variables have been transfered to names.js const john = 'john' const peter = 'peter'

// took a function sayHi from here to utils.js

// sayHi(john)
// sayHi(peter)

// Encapsulated code -> only sharing the minimum
// Node uses commonjs library under the hood and every file in node is a module

// // -------------------------------------------------------------------------------------
// // 02
// // from names01
// const names = require('./4-names.js')
// // everytime we create modules we start with a dot
// console.log(names);
// // goto utils01
// // -----------------------------------------------------------------------------------

// // -------------------------------------------------------------------------------------
// // 03
// // from utils01
// const names = require('./4-names.js')
// const sayHi = require('./5-utils')

// sayHi(names.john)
// // every file by default is a module
// // from here, 6-alternative-flavour
// // -----------------------------------------------------------------------------------

// // -------------------------------------------------------------------------------------
// // 04
// // from alternate-flavour02
// const names = require('./4-names.js')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavour')
// console.log(data)
// sayHi(names.john)
// // goto mind-grenade 01
// // -----------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// 05
// from mind-grenade01
const names = require("./4-names.js");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");
// if we have a function in a module, that function will run even if we will not assign it to a variable
// this is normally used with 3rd party modules
// when you import a module you actually invoke it
// this is because when imported node wraps it into a function
// goto
// -----------------------------------------------------------------------------------
