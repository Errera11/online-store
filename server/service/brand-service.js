const {Brand} = require('../db/models/models')
class BrandService {
    async create(name) {
        const brand = await Brand.create({name});
        return brand;
    }

    async getAll() {
        return await Brand.findAll();
    }
}

module.exports = new BrandService()