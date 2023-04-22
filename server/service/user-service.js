const {User, Cart} = require('../db/models/models')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../exceptions/ApiError");

const jwtToken = (id, email, role) => {
    return {token: jwt.sign({id, email, role}, process.env.JWT_SECRET, {expiresIn: '1h'}) };
}

class UserService {

    async signIn({email, password}) {
        const user = await User.findOne({where: {email}});
        if(!user) throw ApiError.BadRequest("Incorrect email or password");
        const isPassword = bcrypt.compareSync(password, user.password);
        if(!isPassword) throw ApiError.BadRequest("Incorrect email or password");
        return jwtToken(user.id, user.email, user.role);
    }

    async signUp({email, password}) {
        const candidate = await User.findOne({where: {email}});
        if(candidate) throw ApiError.BadRequest('Email already in use ' + email);
        const hashedPassword = await bcrypt.hash(password, 3);
        const user = await User.create({email, password: hashedPassword});
        await Cart.create({userId: user.id});
        return jwtToken(user.id, user.email, user.role)
    }

    async auth() {

    }

}

module.exports = new UserService()