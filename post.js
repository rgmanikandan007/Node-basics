const express = require("express");

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
        </form>`
    );
});

app.post('/submit', (req,res)=>{
    const name = req.body.name;
    res.send(`Form Submitted by ${name}`)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`)
})