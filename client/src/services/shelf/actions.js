// import jsonApi from '../../apis/api';
import axios from 'axios';
import { FETCH_PRODUCTS } from './actionTypes';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const fetchProducts = (filters, sortBy, callback) => async dispatch => {
  let response;

  try {
   response = await axios.get('/products');
  } catch (e) {
    return console.log(e.response);
  }

  let products = response.data;

    if (!!filters && filters.length > 0) {
      products = products.filter(p =>
        filters.find(f => p.availableSizes.find(size => size === f))
      );
    }

    if (!!sortBy) {
      products = products.sort(compare[sortBy]);
    }

    if (!!callback) {
      callback();
    }

  dispatch({ type: FETCH_PRODUCTS, payload: products });
}

// export const fetchProducts = (filters, sortBy, callback) => dispatch => {
//   return axios
//     .get(productsAPI)
//     .then(res => {
//       let { products } = res.data;
//
//       if (!!filters && filters.length > 0) {
//         products = products.filter(p =>
//           filters.find(f => p.availableSizes.find(size => size === f))
//         );
//       }
//
//       if (!!sortBy) {
//         products = products.sort(compare[sortBy]);
//       }
//
//       if (!!callback) {
//         callback();
//       }
//
//       return dispatch({
//         type: FETCH_PRODUCTS,
//         payload: products
//       });
//     })
//     .catch(err => {
//       console.log('Could not fetch products. Try again later.');
//     });
// };
