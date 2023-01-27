// package/ dependancy/ library
// it is uncontrolled
// to know about security, it should be well downloaded. not weakly downloads
// you can install a package as a local depandacy. Meaning you will only use it in the package you are using
// npm i <packagename>

// or global dependanct
// npm install -g <packagename>

// package.json
// this is a manifest file
// we create it in 3 ways
// 1. Root -> you will have to create each property
// 2. npm init -> answer all questions
// 3. npm init -y

// it will now be stored as a dependancy
// npm i lodash
// now in package.json we have a dependancy of this lodash and its version number

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);

// Github
// create a repo
// create a gitignore file so that your node modules can be ignored by your source control and you wount push it to github
// /node_modules
