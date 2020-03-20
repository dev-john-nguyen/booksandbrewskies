const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema ({
  firstName: {
    type: String,
    required: [true, "FirstName Required"],
    maxlength: [100, "Max Length is 100 Chararcters"]
  },
  lastName: {
    type: String,
    required: [true, "LastName Required"],
    maxlength: [100, "Max Length is 100 Chararcters"]
  },
  email: {
    type: String,
    required: [true, "Empty Required"],
    maxlength: [200, "Max Length is 200 Chararcters"]
  },
  message: String
});

module.exports = mongoose.model("Contact", contactSchema);
