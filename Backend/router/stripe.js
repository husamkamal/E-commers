const StripeRouter = require('express').Router();
const stripe = require('stripe')(process.env.SECRET_KEY);

StripeRouter.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeError, stripeRes) => {
      if (stripeError) {
        res.status(500).json(stripeError);
      } else {
        res.status(200).json(stripeRes);
      }
    },
  );
});

module.exports = StripeRouter;
