const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    nom: String,
    image: String,
    score: String,
    code: String
})

module.exports = mongoose.model("product", ProductSchema)