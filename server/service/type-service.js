const {Type} = require('../db/models/models')
class TypeService {
    async create(name) {
        const type = await Type.create({name});
        return type;
    }

    async getAll() {
        return await Type.findAll();
    }
}

module.exports = new TypeService()