const ApiError = require("../exceptions/ApiError");
const {validationResult} = require('express-validator');

const errorMiddleware = (error, req, res, next) => {
    if(error instanceof ApiError) {
        return res.status(error.status).json(error.message)
    }
    return res.status(500).json({message: "Unhandled server error"});
}

module.exports = errorMiddleware;