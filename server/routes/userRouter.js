const Router = require('express').Router;
const userRouter = Router();
const userController = require('../controllers/userController');
const {body} = require('express-validator');

userRouter.post('/signIn', body('email').isEmail(), body('password').not().isEmpty(), userController.signIn)
userRouter.post('/signUp', body('email').isEmail(), body('password').not().isEmpty(), userController.signUp)
userRouter.get('/auth', userController.auth)

module.exports = userRouter;
