// 📌 Routing - Routing basically means implementing different functionalities for url to be requested.
// Routing is the primary concern in big real world application but we are going to use tool - express
// express is basically a NodeJS framework will do it later.

// 📌 STEP 1 - To analyze the url - for that we are going to use module URL
// requiring the modules
const http = require("http");
// const url = require("url");

// 📌 STEP 2 - req.url will give the url value to you
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index") {
    res.end("welcome to home page");
  } else if (req.url === "/product") {
    res.end("welcome to product page !");
  } else if (req.url === "/user") {
    res.end("Welcome to users page");
  } else if (req.url === "/dashboard") {
    res.end("Welcome to dashboard page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>page does not exist</h1>");
  }
});

// explanation
// browser automatically makes the request for /favicon.ico
// res.writeHead(statusCode, {object for headers}) always set headers before sending the response
// Now browser will expect according to the header been passed

// 📌 STEP 3 - listening to the server
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});
