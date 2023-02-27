// NodeJS official documentation https://nodejs.org/en/docs/

// 📌 requiring fs module
// to work with the file system.
// require('fs') will returns the object through which we can perform all the functionalities of that module
const fs = require("fs");

// 📌 Reading and writing files
// read data from file and return
const firstProgram = fs.readFileSync("./F1_Get_Started.js", "utf-8");
console.log(firstProgram);

// writing into the file
const data = `//This is my first program. \n\n ${firstProgram} \n\n }`;
fs.writeFileSync("./output.js", data);
