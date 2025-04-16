const Product = require('../models/product');
var mongoose = require("mongoose");
const mongo = require('mongodb');
const product = require('../models/product');


exports.addPoduct = (req, res, next) => {
    try {

        Product.findOne({ code: req.body.code }).then(product => {
            if (product) {
                return res.json({
                    message: "product already exists",

                })
            } else {
                const newProduct = new Product({
                    nom: req.body.name,
                    image: req.body.image,
                    code: req.body.code,
                    score: req.body.score
                });
                newProduct
                    .save()
                    .then(result =>
                        res.json(
                            {
                                status: "success",
                                message: "Product successfully added",
                            }
                        ))

            }
        })

    } catch (e) {
        res.json({ error: e })
    }

}

exports.getProducts = (req, res, next) => {
    try {
        Product.find({}).then(product => {
            res.json(
                {
                    status: "success",
                    list: product,
                })
        })


    }
    catch (e) {
        res.json({ error: e })
    }
}
