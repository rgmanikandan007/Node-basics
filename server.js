const http = require("http");

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader("content-type", "text/plain");
    res.end("Hello world\n");
})

server.listen(5000,()=>{
    console.log("server is running http://localhost:5000");
})

// Create server with express 

// const express = require("express");
// const app = express();

// app.get("/", (req, res)=>{
//     res.send("Vetriii");
// })

// app.listen(5000, () => {
//     console.log("Server running http://localhost:5000")
// })
