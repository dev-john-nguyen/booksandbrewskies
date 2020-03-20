import {GET_PODCAST} from './actionTypes';
import axios from 'axios';

export const fetchPodcasts = () => async(dispatch) => {

  const podcasts = await axios.get('/podcasts').catch(e => {
    return console.log(e);
  });

  if(!podcasts){
    return podcasts;
  }

  dispatch({
    type: GET_PODCAST,
    payload: podcasts.data
  });
};
