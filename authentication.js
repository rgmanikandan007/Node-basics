const express = require("express");
const app = express();


app.use((req, res, next) => {
    console.log("Headers received:", req.headers); 
    if (req.headers["api-key"] === "my-secret-key") {
        next(); 
    } else {
        res.status(403).send("Forbidden"); 
    }
});


app.get("/", (req, res) => {
    res.send("Access granted!");
});


app.listen(3005, () => {
    console.log("Server is running on port 3005");
});
