const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const stripe = require('stripe')('sk_test_cosoTfzbWr3wQg7yLLE9x6fh');

router.get('/', asyncHandler(async(req, res) => {

  const order = JSON.parse(req.query.order);

    const paymentIntent = await stripe.paymentIntents.create({
    amount: order.amount,
    currency: order.currency,
    description: order.description,
    metadata: {integration_check: 'accept_a_payment'},
    });

    res.json(paymentIntent.client_secret);

}));

module.exports = router;
