const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");
const itemRouter = require("./itemRouter");
const cartRouter = require("./cartRouter");
const Router = require('express').Router;
const router = new Router();

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/item', itemRouter)
router.use('/cart', cartRouter)

module.exports = router;