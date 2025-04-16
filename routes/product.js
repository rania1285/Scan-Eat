
const productcontroller = require("../controllers/product");

module.exports.setup = function (app) {


    app.post('/api/product/create', productcontroller.addPoduct);
    app.get('/api/product', productcontroller.getProducts);


}
