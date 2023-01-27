// // ---------------------------------------------------------------------
// // 01
// const { readFile, writeFile } = require("fs");

// // for asynchronous, we provide a call back
// // this means we run it when the functionality is completed

// readFile('./content/first.txt', (err,result) => {
//     if (err)
//     {
//         console.log(err)
//         return;
//     }
//     else {
//         console.log(result)
//     }
//     // we get a buffer if we dont provide a utf encoding
// })
// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------
// // 02
// const { readFile, writeFile } = require("fs");

// // for asynchronous, we provide a call back
// // this means we run it when the functionality is completed

// readFile('./content/first.txt', 'utf8' , (err,result) => {
//     if (err)
//     {
//         console.log(err)
//         return;
//     }
//     else {
//         console.log(result)
//     }
//     // we get a buffer if we dont provide a utf encoding
//     // now we want to assign the result to a variable and read the second file then create the new file
// })
// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------
// // 03
// const { readFile, writeFile } = require("fs");

// // for asynchronous, we provide a call back
// // this means we run it when the functionality is completed

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result using async ${first} , ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });
// // but this is so complicated
// // This is non-blocking btw
// // This is a callback hell

// // GoTo 10-fs-sync 05
// // ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// 04
const { readFile, writeFile } = require("fs");

// for asynchronous, we provide a call back
// this means we run it when the functionality is completed
console.log('start')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result using async ${first} , ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting the next task')
// you notice that you have start then next we have starting the next task
// it means the moment we start this task, we offload that task and we continue with our code
// alternative is using promises or async await
// this is just an illustration


// End
// ---------------------------------------------------------------------
