const Handler = lulu.use('app/errors/Handler');
const ProductService = require('../../services/ProductService');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    
    create: async function (req, res) {
        try {
            const newProduct = await ProductService.make(req.body)
            return response.dispatch("Product Added Successfully", {newProduct}, res, 200);
        } catch (error) {
            return response.error(Handler(error), res);
        }
    },

    details: async function (req, res) {
        try {
            const details = await ProductService.item()
            return response.dispatch("Product Details", {details}, res, 200);
        } catch (error) {
            return response.error(Handler(error), res);
        }
    },
}