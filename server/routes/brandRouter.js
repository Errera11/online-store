const Router = require('express').Router;
const brandRouter = Router();
const brandController = require('../controllers/brandController');

brandRouter.get('/', brandController.getAll)
brandRouter.post('/', brandController.create)

module.exports = brandRouter;
