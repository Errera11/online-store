const typeService = require("../service/type-service");
const ApiError = require("../exceptions/ApiError");

class TypeController {

    async create(req, res, next) {
        try {
            const {name} = req.body;
            const type = await typeService.create(name);
            res.status(200).json(type);
        } catch(e) {
            next(ApiError.BadRequest(e));
        }
    }

    async getAll(req, res, next) {
        try {
            const types = await typeService.getAll();
            res.status(200).json(types);
        } catch(e) {
            next(ApiError.BadRequest(e));
        }
    }

}

module.exports = new TypeController()