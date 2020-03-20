import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from './contact/reducer';
import shelfReducer from './shelf/reducer';
import cartReducer from './cart/reducer';
import cartTotalReducer from './total/reducer';
import sortReducer from './sort/reducer';
import filtersReducer from './filters/reducer';
import podcastReducer from './podcast/reducer';

export default combineReducers({
  contact: contactReducer,
  form: formReducer,
  shelf: shelfReducer,
  cart: cartReducer,
  total: cartTotalReducer,
  filters: filtersReducer,
  sort: sortReducer,
  podcasts: podcastReducer
});
