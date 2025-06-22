const Route = require('express').Router();
const productController = require('../Controller/productController');

Route.get('/get-product',productController.getProduct);
Route.post('/create-product',productController.createProduct);

module.exports = Route;