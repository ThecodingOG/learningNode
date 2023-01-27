// // -------------------------------------------------------------------------
// // 01
// const http = require('http');

// // the first parameter is a request
// // the second one is a response. smth we are sending back
// const server = http.createServer((req,res) => {

// })
// // -------------------------------------------------------------------------

// // -------------------------------------------------------------------------
// // 02
// // we set up the port
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Welcome to our home page');
//     res.end();

// })
// server.listen(5000)
// // start the server
// // notice that we are not exiting.
// // webserver listens to requests. So you would want your web server to always be up
// // when you go to your browser and say localhost:5000, you see your page
// // -------------------------------------------------------------------------

// // -------------------------------------------------------------------------
// // 03
// // we set up the url
// // request object
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.write('Welcome to our home page');
//     res.end();

// })
// server.listen(5000)
// // when you make changes you need to restart your server
// // go back your browser and request or refresh
// // -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// 04
// we set up the url
// request object
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our home pagee");
  }
  if (req.url === "/about") {
    return res.end("Here is our short history");
  }
  return res.end("Sorry");
});
server.listen(5000);
// end
// -------------------------------------------------------------------------
