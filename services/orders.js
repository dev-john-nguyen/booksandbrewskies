const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

router.post('/', asyncHandler(async(req, res) => {

  const order = req.body;

  const newOrder = new Order({
    chargeId: order.chargeId,
    name: order.name,
    email: order.email,
    phone: order.phone,
    amount: order.amount,
    chargeAmount: order.chargeAmount,
    currency: order.currency,
    products: order.products,
    chargeDescription: order.chargeDescription,
    shippingAddress: order.shippingAddress,
    paymentStatus: order.paymentStatus,
    confirmedPayment: order.confirmedPayment,
    orderStatus: order.orderStatus
  });

  newOrder.save()
    .then(() => res.json(newOrder))
    .catch(err => res.status(400).json('Error: ' + err));



//   const {
//     name,
//     currency,
//     description,
//     totalPrice,
//     success_url,
//     cancel_url } = req.body;
//
//   const session = await stripe.checkout.sessions.create({
//     billing_address_collection: 'required',
//     payment_method_types: ['card'],
//     line_items: [{
//       name: name,
//       description: description,
//       amount: totalPrice,
//       currency: currency,
//       quantity: 1
//     }],
//     success_url: `${success_url}?session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: cancel_url,
//   });
// res.json({ err: null, success: 'Create stripe checkout session succeed!', sessionId: session.id })

}));

module.exports = router;
