const router = require('express').Router();

const AuthRouter = require('./Auth');
const CartRouter = require('./Cart');
const OrderRouter = require('./Order');
const ProductRouter = require('./Product');
const StripeRouter = require('./stripe');
const UserRouter = require('./User');

router.use('/auth', AuthRouter);
router.use('/cart', CartRouter);
router.use('/order', OrderRouter);
router.use('/product', ProductRouter);
router.use('/user', UserRouter);
router.use('/checkout', StripeRouter);
module.exports = router;
