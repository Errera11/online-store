const ApiError = require("../exceptions/ApiError");
const itemService = require('../service/item-service')
class ItemController {

    async create(req, res, next) {
        try {
            const item = await itemService.create(req.body, req.files.image)
            res.status(200).json(item);
        } catch(e) {
            next(ApiError.BadRequest(e))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const item = await itemService.getOne(id)
            res.status(200).json(item);
        } catch(e) {
            next(ApiError.BadRequest(e))
        }
    }

    async getAll(req, res, next) {
        try {
            const {limit, page, typeId, brandId} = req.query;
            const items= await itemService.getAll({limit, page,
                typeId, brandId})
            res.status(200).json(items);
        } catch(e) {
            next(ApiError.BadRequest(e))
        }
    }

}

module.exports = new ItemController()