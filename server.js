const express = require('express')
const app = express()
const mongoose = require('mongoose')

const users = require("./routes/user");
const products = require("./routes/product");

app.use(express.json());

const mongoUri = "mongodb://127.0.0.1/healthy"
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
users.setup(app);
products.setup(app)
mongoose.connection.on("connected", () => {
    console.log("connected to mongo ")
})
mongoose.connection.on("error", (err) => {
    console.log("error", err)
})
app.get('/', (req, res) => {
    res.send("welcome to node.js")
})


app.listen(3000, () => {
    console.log("server running")
})