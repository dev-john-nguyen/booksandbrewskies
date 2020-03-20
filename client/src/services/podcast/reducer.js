import {GET_PODCAST} from './actionTypes';


export default (state=[], action) => {
  switch (action.type) {
    case GET_PODCAST:
      return action.payload;
    default:
      return state;
  }
}
