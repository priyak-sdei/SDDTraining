// userActions.js

import {
    REGISTER_USER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } from './ActionTypes';
  
const registerUser = userData => {
    return dispatch => {
      dispatch({ type: REGISTER_USER });
  
      // Simulate an API call to register the user
      // You can replace this with your actual API call
      setTimeout(() => {
        // Simulate a successful registration
        const registeredUser = { ...userData, id: '123' };
        dispatch({ type: REGISTER_SUCCESS, payload: registeredUser });
      }, 2000);
    };
  };
  export default registerUser;