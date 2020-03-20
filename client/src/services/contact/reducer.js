import { CONTACTED } from './actionTypes';

const INITIAL_STATE = {
  contacted: false,
  contactInfo: {
    firstName:"First Name",
    lastName:"Last Name",
    email:"email",
    message: "Say Something Damn it!"
  }
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type){
    case CONTACTED:
      return {...state, contacted: true, contactInfo: action.payload};
    default:
      return state;
  }
}
