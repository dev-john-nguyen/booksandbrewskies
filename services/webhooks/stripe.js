const router = require('express').Router();
const stripe = require('stripe')('sk_test_cosoTfzbWr3wQg7yLLE9x6fh');
const endpointSecret = 'whsec_rDRf0Q0Tp89x3z1V3fhzVw6Ic2e7WcJN';
const bodyParser = require("body-parser");
const asyncHandler = require('express-async-handler');


const Order = require("../../models/orderModel");

handlePaymentIntentSucceeded = asyncHandler(async(paymentIntent) => {

  let query = { chargeId: paymentIntent.id, phone: paymentIntent.shipping.phone };

  Order.findOneAndUpdate(query, { confirmedPayment: paymentIntent.status }, {new:true}, (err, doc) =>{
    if (err) {
      return next(err)
    }

    console.log(doc);
  });
});

handlePaymentIntentFailed = asyncHandler(async(paymentFailedIntent) => {

  const order = paymentFailedIntent;

  const newOrder = new Order({
    chargeId: order.id,
    name: order.shipping.name,
    email: order.shipping.phone,
    phone: order.phone,
    amount: order.amount,
    chargeAmount: 0,
    currency: order.currency,
    products: JSON.parse(order.description),
    shippingAddress: order.shipping,
    paymentStatus: order.status,
    confirmedPayment: "failed",
    orderStatus: "failed"
  });

  await newOrder.save()
    .catch(err => next(err));

});

// Match the raw body to content type application/json
router.post('/', bodyParser.raw({type: 'application/json'}), (request, response) => {

  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'charge.succeeded':
      const chargeData = event.data.object;
      console.log(chargeData);
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Then define and call a method to handle the successful payment intent.
      handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_intent.payment_failed':
      const paymentFailedIntent = event.data.object;

      handlePaymentIntentFailed(paymentFailedIntent);
    default:
      // Unexpected event type
      return response.status(400).end();
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true})
})

module.exports = router;
