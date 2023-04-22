const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");
const itemRouter = require("./itemRouter");
const Router = require('express').Router;
const router = new Router();

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/item', itemRouter)

module.exports = router;