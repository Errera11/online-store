const brandService = require('../service/brand-service');
const ApiError = require("../exceptions/ApiError");
class BrandController {

    async create(req, res, next) {
        try {
            const {name} = req.body;
            const brand = await brandService.create(name);
            res.status(200).json(brand);
        } catch(e) {
            next(ApiError.BadRequest(e));
        }
    }

    async getAll(req, res, next) {
        try {
            const brands = await brandService.getAll();
            res.status(200).json(brands);
        } catch(e) {
            next(ApiError.BadRequest(e));
        }
    }

}

module.exports = new BrandController()