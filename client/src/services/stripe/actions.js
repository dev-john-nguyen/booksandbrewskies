import axios from 'axios';

const url = `http://${window.location.hostname}:3000`;

export const stripe = (cartTotal, cartProducts) => async (dispatch) => {
  const image = `${url}/static/media/home-background-img.40b4543e.jpg`;

  var name = "Summary: ";
  var description = "Please ensure that everything is correct before you complete" +
  " your purchase. For you reminder, we have a 30 day refund policy. Please contact us at beersandbreweskies@gmail.com" +
  " if you have any questions. Thank you for shopping with us.";

  cartProducts.forEach((item, i) => {
    if(i < (cartProducts.length - 1)){
      name +=`${item.title} (${item.quantity}), `;
    }else{
      name += `and ${item.title} (${item.quantity}).`;
    }
  });

  //convert totalPrice into whole number
  const totalPrice = cartTotal.totalPrice * 100;

  const formValues = {
    name: name,
    description: description,
    currency: cartTotal.currencyId,
    totalPrice: totalPrice,
    success_url: `${url}/checkout/success`,
    cancel_url: `${url}/shop/`
  }

  let response;
  // const response = await contacts.post('/contacts/add', formValues);
  try {
   response = await axios.post('/shop/checkout', formValues);
  } catch (e) {
  return console.log(e);
  }

  const stripe = window.Stripe('pk_test_0kzCXvF6peItv0Z0FZ6QFG0j');
  console.log(stripe);
  stripe.redirectToCheckout({
  sessionId: response.data.sessionId
}).then(function (result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `result.error.message`.
  if(result.error){
    return console.log(result.error.message);
  }

  console.log(result);
});


  // history.push('/contact?success');
};
