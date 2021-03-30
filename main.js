const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(morgan("tiny"))

app.get('/mantap', (req, res) => {
    res.json({name: "Kiko", id: "kepsek"})
})

app.listen(3000, _ => {
    console.log("Listening on port 3000");
})