const userService = require('../service/user-service');
const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/ApiError");


class UserController {

    async signIn(req, res, next) {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return next(ApiError.BadRequest({message: "Invalid email or password"}, error.array()));
        }
        try {
            const {email, password} = req.body;
            const user = await userService.signIn({email, password})
            res.json(user);
        } catch (e) {
            next(e)
        }

    }

    async signUp(req, res, next) {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return next(ApiError.BadRequest({message: "Invalid email or password"}, error.array()));
        }
        try {
            const {email, password} = req.body;
            const user = await userService.signUp({email, password})
            res.json(user);
        } catch (e) {
            next(e)
        }
    }

    async auth(user, req, res, next) {
        try {

            if(!user.id) throw user;
            const data = userService.auth(user)
            req.user = data.user;
            res.json(data.token)
        } catch(e) {
            next(e)
        }
    }
}

module.exports = new UserController()