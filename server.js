
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

// q22Q2dIB0ApxErbM
//
// mongo "mongodb+srv://cluster0-y81ja.mongodb.net/test"  --username admin-nguyen --password q22Q2dIB0ApxErbM

mongoose.connect('mongodb+srv://admin-nguyen:q22Q2dIB0ApxErbM@cluster0-y81ja.mongodb.net/booksandbrewskiesDB',{
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully Connected to beersandbrewskiesDB')
});

app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  if (req.originalUrl === '/webhook') {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

const productsRouter = require('./services/products');
const contactsRouter = require('./services/contacts');
const ordersRouter = require('./services/orders');
const ordersStripeRouter = require('./services/stripeOrders');
const stripeWebhookRouter = require('./services/webhooks/stripe');
const podcastsRouter = require('./services/podcasts');

app.use('/products', productsRouter);
app.use('/contact', contactsRouter);
app.use('/webhook', stripeWebhookRouter);
app.use('/shop/checkout/', ordersStripeRouter);
app.use('/paid', ordersRouter);
app.use('/podcasts', podcastsRouter);

// Serve Static Assets (React Build) in production
if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

if(process.env.NODE_ENV.trim() === 'test'){
  console.log("Testing Environment");
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5050;


app.listen(port, function(){
  console.log("Server Started on port 5050");
});
