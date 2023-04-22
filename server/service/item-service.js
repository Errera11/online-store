const {Item} = require('../db/models/models')
const path = require('path');
const uuid = require('uuid')

class ItemService {

    async create(body, image) {
        const {name, price, typeId, brandId} = body;
        const filename = uuid.v4() + '.jpg';
        await image.mv(path.resolve(__dirname, '..', 'static', filename));
        return await Item.create({name, price, typeId, brandId, image: filename})
    }

    async getOne(id) {
        return await Item.findOne({where: {id}});
    }

    async getAll({limit, page, typeId, brandId}) {
        limit = limit || 10e10;
        page = page || 1;
        const offset = page*limit - limit;
        if(typeId && brandId) {
            return await Item.findAndCountAll({where: {typeId, brandId}, limit, offset});
        }
        else if(!typeId && brandId) {
            return await Item.findAndCountAll({where: {brandId}, limit, offset});
        }
        else if(typeId && !brandId) {
            return await Item.findAndCountAll({where: {typeId}, limit, offset});
        }
        return await Item.findAndCountAll({limit, offset});
    }

}

module.exports = new ItemService()