class UserController {

    async signIn(req, res) {

    }

    async signUp(req, res) {

    }

    async auth(req, res) {
        res.status(200).json({message: 'woow'})
    }

}

module.exports = new UserController()