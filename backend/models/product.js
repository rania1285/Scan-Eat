const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nom: String,
  image: String,
  score: String,
  code: String,
  marque: String,
  quantite: String,
  scorevaleur: String,
  pays: String,
  categories: String,
  ingredients: String,
  energies: String,
  proteines: String,
  sucre: String,
  fibres: String,
  lipides: String,
  glucides: String,
  sels: String,
  eco: String,
  nova: String,

  allergenes: String,
});

module.exports = mongoose.model("product", ProductSchema);
