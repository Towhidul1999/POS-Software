const Product = require('../models/mongoose/Product');
const { db } = require('../helpers');
// const Hash = require('../helpers/Hash');
const AuthSessionService = require('./AuthSessionService');

//Add Product
async function make (data) {
    // console.log("service",data)
    let newProduct = new Product(data);
    return await newProduct.save();
}

//Products details
async function item (data) {
    const productDetails = await Product.find();
    return await productDetails;
}

module.exports = {
    make,
    item
}