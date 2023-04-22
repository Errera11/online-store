const userService = require('../service/user-service');
const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/ApiError");


class UserController {

    async signIn(req, res, next) {
        const error = validationResult(req);
        console.log(error)
        if(!error.isEmpty()) {
            console.log(error)
            return next(ApiError.BadRequest("Invalid email or password", error.array()));
        }
        try {
            const {email, password} = req.body;
            const user = await userService.signIn({email, password})
            res.json(user);
        } catch (e) {
            next(e)
        }

    }

    async signUp(req, res) {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return next(ApiError.BadRequest("Invalid email or password", error.array()));
        }
        try {
            const {email, password} = req.body;
            const user = await userService.signUp({email, password})
            res.json(user);
        } catch (e) {
            next(e)
        }
    }

    async auth(req, res) {
        res.status(200).json({message: 'woow'})
    }

}

module.exports = new UserController()