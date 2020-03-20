import { CLEAR_CART, LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

const initialState = {
  products: [],
  productToAdd: {},
  productToRemove: {},
  productToChange: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productToAdd: Object.assign({}, action.payload)
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productToRemove: Object.assign({}, action.payload)
      };
    case CHANGE_PRODUCT_QUANTITY:
      return {
        ...state,
        productToChange: Object.assign({}, action.payload)
      };
    case CLEAR_CART:
      return {
        products: [],
        productToAdd: {},
        productToRemove: {},
        productToChange: {}
      };
    default:
      return state;
  }
}
