const req = require("express/lib/request")
const res = require("express/lib/response")


module.exports.brandsController = {
    getBrands: (req, res) => {
        res.json('код вывода бренда')
    },

    createBrand: (req, res) => {
        res.json('код добавления бренда')
    },

    deleteBrand: (req, res) => {
        res.json('код удаления бренда')
    }
}