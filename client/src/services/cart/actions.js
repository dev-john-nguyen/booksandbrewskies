import { LOAD_CART,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_PRODUCT_QUANTITY,
  CLEAR_CART
} from './actionTypes';

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const changeProductQuantity = product => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: product
});

export const clearCart = () => dispatch => {
  dispatch({
  type: CLEAR_CART
  })
};
