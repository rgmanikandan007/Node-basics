const http = require("http");

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader("content-type", "text/plain");
    res.end("Hello world\n");
})

server.listen(5000,()=>{
    console.log("server is running http://localhost:5000");
})