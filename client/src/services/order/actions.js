import axios from 'axios';

export const getStripe = (cartTotal, cartProducts) => {

  const products = cartProducts.map(p => {
    return ({id: p.id,
    sku: p.sku,
    title: p.title,
    description: p.description,
    price: p.price,
    quantity: p.quantity})
  });

  const order = {
    amount: Math.floor(cartTotal.totalPrice * 100),
    currency: cartTotal.currencyId,
    description: JSON.stringify(products)
  }

  let response;

  try {
         response = axios.get('/shop/checkout',
         {
          params: {order}
      });
 } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    return {error: true};
  }
  return response;
}

export const storeOrder = (paymentIntent, cartProducts, cartTotal, name, phone, email) => {

  const products = cartProducts.map(p => {
    return ({id: p.id,
    sku: p.sku,
    title: p.title,
    description: p.description,
    price: p.price,
    quantity: p.quantity})
  });

  const order = {
    chargeId : paymentIntent.id,
    name: name,
    phone: phone,
    email: email,
    amount: cartTotal.totalPrice,
    chargeAmount: paymentIntent.amount,
    currency: cartTotal.currencyId,
    products: products,
    chargeDescription: JSON.parse(paymentIntent.description),
    shippingAddress: paymentIntent.shipping,
    paymentStatus: paymentIntent.status,
    confirmedPayment: 'processing',
    orderStatus: 'ordered'
  };

  let response

  try {
    response = axios.post('/paid', order);
  } catch(error) {
     if (error.response) {
       // Request made and server responded
       console.log(error.response.data);
       console.log(error.response.status);
       console.log(error.response.headers);
     } else if (error.request) {
       // The request was made but no response was received
       console.log(error.request);
     } else {
       // Something happened in setting up the request that triggered an Error
       console.log('Error', error.message);
     }
     return {error: true};
   }

   return response;

}
