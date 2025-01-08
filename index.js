const fs = require("fs");

fs.writeFileSync('example.txt', "This is node")
console.log("File writen Successfully");


const fileContent = fs.readFileSync('exmpple.txt', "http")
console.log(fileContent)

fs.appendFileSync("example.txt", "This is node js")
console.log("Append Successfully")

const updateContent = fs.readFileSync("example.txt", "utf-8")
console.log(updateContent)
