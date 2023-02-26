// 📌 First understand the difference between synchronus and asynchronus way

// --------- Synchronous way
// In this each line will completely execute then control move to the next line.
// It will also possible it will block the next operations/instructions
// Synchronous code is also blocking code because it will wait for the previous instrcutions to be completed first.

// -------- Asynchronous way / Non-blocking code
// In this we will not wait for the previous instructions to be compeleted.
// If it is require some I/O operation or network call we can make it async so the rest of the instructions get exectued
// Async function will execute a callback function once their work is done.

// 📌 FileSystem Async funtion with explanation
const fs = require("fs");
fs.readFile("./F1_Async_Nodejs.js", "utf-8", (err, data) => {
  console.log(data);
});

console.log("new line");
// if you look readFile() takes file,encoding,callback once the control get in this async function it will start reading the file in background. And rest of the instruction will execute immediately not wait for data to be printed
// It will leads to maximum cpu utlization.

// 📌 NodeJS Async nature
// 1 - NodeJS process where it is running your application only have single thread.
// 2 - Thread - means where your code actually executed inside the processors.
// 3 - Suppose, All the user of your application will use the same thread
// 4 - If one of the user uses synchrounous function then rest of the users should have to wait

// 📌 Callback hell
// As we are talking about Asynchrounous function that basically takes callback function which sometimes lead to unreadable and unmanagable code.
// This is called callback hell it is such a common problem for callback function

// 📌 Callback hell - solution
// Using Promises ES6 feature
// Using async/await ES8 feature
