const express = require('express');
const ProductController = require('../app/controllers/HTTP/ProductController');
const Authenticate = require('../app/middlewares/Authenticate');
const router = express.Router();
/* Controllers */
const UserController = lulu.use('app/controllers/HTTP/UserController');
/* Controllers */
/* Request Validator Middlewares */
const UserRegistrationRequest = lulu.use('app/requests/UserRegistrationRequest');
/* Request Validator Middlewares */

router.get('/', (req, res) => {
    res.send("Hi From API");
});

router.post('/user/register', [],  UserController.register);
router.post('/user/login', [],  UserController.login);

router.get('/user/list', [],  UserController.list);
router.get('/user/details/:id', [],  UserController.details);
router.post('/create/admin', [Authenticate], UserController.create);
router.post('/admin/login', [], UserController.adminLogin);
router.post('/add/product', [Authenticate], ProductController.create);
router.get('/product/details', [], ProductController.details);


module.exports = router;