const {Item, ItemInfo, Rating} = require('../db/models/models')
const path = require('path');
const uuid = require('uuid')
const {BadRequest} = require("../exceptions/ApiError");

class ItemService {

    async create(body, image) {
        const {name, price, typeId, brandId, info} = body;
        const filename = uuid.v4() + '.jpg';
        await image.mv(path.resolve(__dirname, '..', 'static', filename));
        const item = await Item.create({name, price, typeId, brandId, image: filename, info});
        JSON.parse(info).forEach(i => {
            ItemInfo.create({itemId: item.id, title: i.title, description: i.description})
        })
        return item;
    }

    async getOne(id) {
        return await Item.findOne({where: {id}, include: {model: ItemInfo, as: 'info'}});
    }



    async getAll({limit, page, typeId, brandId}) {
        limit = limit || 10e10;
        page = page || 1;
        const offset = page * limit - limit;
        if (typeId && brandId) {
            return await Item.findAndCountAll({where: {typeId, brandId}, limit, offset});
        } else if (!typeId && brandId) {
            return await Item.findAndCountAll({where: {brandId}, limit, offset});
        } else if (typeId && !brandId) {
            return await Item.findAndCountAll({where: {typeId}, limit, offset});
        }
        return await Item.findAndCountAll({limit, offset});
    }

    async rate(itemId, rate, userId) {
        const item = await this.getOne(itemId);
        if (await Rating.findOne({where: {userId, itemId}})) throw BadRequest('Item is rated already');
        const rating = await Rating.create({rate, itemId, userId});
        const {count: ratingsCount, rows: ratings} = await Rating.findAndCountAll({where: {itemId}})
        const itemRating = (ratings.reduce((acc, item) => acc + Number(item.rate), 0) / ratingsCount)
            .toFixed(1);
        item.rating = itemRating;
        return await item.save();
    }

    async getUserRates(userId) {
        try {
            const rates = await Rating.findAll({where: {userId}});
            return rates;
        } catch(e) {
            console.log(e)
        }

    }

}

module.exports = new ItemService()