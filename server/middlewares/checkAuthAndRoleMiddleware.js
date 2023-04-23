const jwt = require("jsonwebtoken");
const ApiError = require("../exceptions/ApiError");

const checkAuthAndRoleMiddleware = (role) => {
    return function checkRole(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const user = jwt.verify(token, process.env.JWT_SECRET);
            if (!role) {
                return next(user);
            }
            if (user.role == role) return next();
            return next(ApiError.Forbidden({message: 'You have no access!'}))
        } catch (e) {
             next(ApiError.Unauthorized({message: "You are not authorized!"}))
        }
    }
}

module.exports = checkAuthAndRoleMiddleware;