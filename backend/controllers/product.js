const Product = require("../models/product");
var mongoose = require("mongoose");
const mongo = require("mongodb");
const product = require("../models/product");

exports.addPoduct = (req, res, next) => {
  try {
    Product.findOne({ code: req.body.code }).then((product) => {
      if (product) {
        return res.json({
          message: "product already exists",
        });
      } else {
        const newProduct = new Product({
          nom: req.body.nom,
          image: req.body.image,
          code: req.body.code,
          score: req.body.score,
          marque: req.body.marque,
          quantite: req.body.quantite,
          scorevaleur: req.body.scorevaleur,
          pays: req.body.pays,
          ingredients: req.body.ingredients,
          energies: req.body.energies,
          proteines: req.body.proteines,
          sucre: req.body.sucre,
          fibres: req.body.fibres,
          lipides: req.body.lipides,
          glucides: req.body.glucides,
          sels: req.body.sels,
          eco: req.body.eco,
          nova: req.body.nova,

          allergenes: req.body.allergenes,
        });
        newProduct.save().then((result) =>
          res.json({
            status: "success",
            message: "Product successfully added",
          })
        );
      }
    });
  } catch (e) {
    res.json({ error: e });
  }
};

exports.getProducts = (req, res, next) => {
  try {
    Product.find({}).then((product) => {
      res.json({
        status: "success",
        list: product,
      });
    });
  } catch (e) {
    res.json({ error: e });
  }
};
exports.DeletePoduct = (req, res, next) => {
  try {
    Product.deleteOne({ _id: req.body.id }).then((result) => {
      res.json({
        status: "success",
        result: result,
      });
    });
  } catch (e) {
    res.json({ error: e });
  }
};
