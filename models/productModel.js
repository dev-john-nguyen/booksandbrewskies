const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
  id: {
    type: Number,
    index: true,
    unique: true
  },
  sku: Number,
  title: String,
  description: String,
  availableSizes: Array,
  style: String,
  price: Number,
  installments: Number,
  currencyId: String,
  currencyFormat: String,
  isFreeShipping: Boolean
});

module.exports = mongoose.model("Product", productSchema);
