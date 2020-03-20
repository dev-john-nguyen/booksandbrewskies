import { UPDATE_CART, CLEAR_CART_TOTAL } from './actionTypes';

const initialState = {
  data: {
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
    currencyId: 'USD',
    currencyFormat: '$'
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        data: action.payload
      };
    case CLEAR_CART_TOTAL:
      return {
        data: {
          productQuantity: 0,
          installments: 0,
          totalPrice: 0,
          currencyId: 'USD',
          currencyFormat: '$'
        }
      };
    default:
      return state;
  }
}
