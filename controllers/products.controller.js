const req = require("express/lib/request");
const res = require("express/lib/response");

module.exports.productsController = {
    getProducts: (req, res) => {
        res.json('код вывода продукта')
    },
    
    getProductsById: (req, res) => {
        res.json('код вывода продукта по айди')
    },

    createProduct: (req, res) => {
        res.json('код добавления продукта')
    },

    deleteProduct: (req, res) => {
        res.json('код удаления продукта по айди')
    }
}