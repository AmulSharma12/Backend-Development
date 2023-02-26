// 📌 Creating web server using NodeJS

// 📌 STEP 1  - requiring http module that will provide you network capabilities.
// such as building http server.
const http = require("http");

// 📌 STEP 2  - Create a  server
// Each time when the request comes to the server this callback function getting called
const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

// 📌 STEP 3 - listening to incoming requests
server.listen(8000, '127.0.0.1', ()=>{
    console.log('listening to requests on port 8000')
})