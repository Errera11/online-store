const Router = require('express').Router;
const userRouter = Router();
const userController = require('../controllers/userController');

userRouter.post('/signIn', userController.signIn)
userRouter.post('/signUp', userController.signUp)
userRouter.get('/auth', userController.auth)

module.exports = userRouter;
