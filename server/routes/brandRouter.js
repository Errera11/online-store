const Router = require('express').Router;
const brandRouter = Router();
const brandController = require('../controllers/brandController');
const checkAuthAndRoleMiddleware = require("../middlewares/checkAuthAndRoleMiddleware");

brandRouter.get('/', brandController.getAll)
brandRouter.post('/', checkAuthAndRoleMiddleware('ADMIN'), brandController.create)

module.exports = brandRouter;
