// import jsonApi from '../../apis/api';
import axios from 'axios';
import { CONTACTED } from './actionTypes';

export const contact = (formValues) => async (dispatch, getState) => {

  // const response = await contacts.post('/contacts/add', {...formValues});
  const response = await axios.post('/contact', {...formValues});

  dispatch({ type: CONTACTED, payload: response.data });

  // history.push('/contact?success');
};
