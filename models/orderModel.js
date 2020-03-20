const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema ({
  chargeId: String,
  name: {
    type: String,
    maxlength: [10000, "Max Length is 100 Chararcters"]
  },
  email: {
    type: String,
    required: [true, "Empty Required"],
    maxlength: [200, "Max Length is 200 Chararcters"]
  },
  phone: {
    type: String
  },
  amount: Number,
  chargeAmount: Number,
  currency: String,
  products: Array,
  chargeDescription: Array,
  shippingAddress: Object,
  paymentStatus: String,
  confirmedPayment: String,
  orderStatus: String
});

module.exports = mongoose.model("Order", orderSchema);
