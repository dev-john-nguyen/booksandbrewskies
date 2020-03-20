const router = require('express').Router();
const Contact = require('../models/contactModel');

router.post('/', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;

  const newContact = new Contact({
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message
  });

  newContact.save()
    .then(() => res.json(newContact))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;
