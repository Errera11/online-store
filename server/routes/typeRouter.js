const Router = require('express').Router;
const typeRouter = Router();
const typeController = require('../controllers/typeController');
const checkRoleMiddleware = require("../middlewares/checkAuthAndRoleMiddleware");

typeRouter.get('/', typeController.getAll)
typeRouter.post('/', checkRoleMiddleware('ADMIN'), typeController.create)

module.exports = typeRouter;
