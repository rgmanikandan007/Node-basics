const express = require("express");
const app = express();

app.use((req, res, next) => {
    if (req.headers["api-key"] === "my-secret-key") {
        next(); 
    } else {
        res.status(403).send("Forbidden"); 
    }
});

// Middleware
app.get("/", (req, res) => {
    res.send("Access granted!");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
