// 📌 Web API is the service from which we request some data

// let's say user want to request some data about the products.

// 📌 Routing - Routing basically means implementing different functionalities for url to be requested.
// Routing is the primary concern in big real world application but we are going to use tool - express
// express is basically a NodeJS framework will do it later.

// 📌 STEP 1 - To analyze the url - for that we are going to use module URL
// requiring the modules
const http = require("http");
const fs = require("fs");

// when api hits we will first read the data.json file - this will only executed once
// so whenever you made request you dont have to read file again and again
const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

// 📌 we are trying to achieve read the data from the different file data.json
// reading json file and parse into javascript object and send back to client
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index") {
    res.end("welcome to home page");
  } else if (req.url === "/product") {
    res.end("welcome to product page !");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>page does not exist</h1>");
  }
});

// 📌  listening to the server
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});

// NOTES - dot means where the script is running and __dirname means the current working directory.
