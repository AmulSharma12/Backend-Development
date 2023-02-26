// 📌 Reading and writing files
// Asynchronously / Non-blocking way

//requiring fs module
const fs = require("fs");

// reading the file in async way so that rest of the code immediately runs
// fs.readFile("./F1_Async_Nodejs.js", "utf-8", (err, data1) => {
//     console.log(data)
// });

// writing the file in asynchrounous way 
fs.writeFile('./final.txt', 'final me', 'utf-8', err => console.log("no error"));


// 📌 Normal function vs Arrow function
// 1 - syntax wise both are different
// 2 - Arrow function use this keyword of parent whereas normal function have thier own this keyword.