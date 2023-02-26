// 📌 Creating web server using NodeJS

// 📌 STEP 1  - requiring http module that will provide you network capabilities.
// such as building http server.
const http = require("http");

// 📌 STEP 2  - Create a  server
// Each time when the request comes to the server this callback function getting called
const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from the server");
});

// 📌 STEP 3 - listening to incoming requests
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});

// 📌 One thing to noted - App keeps on running before that it does their work and exited the application
// right now it keeps on running the server and does not exited the application because of event loop will talk later on.
