// userReducer.js

import {
    REGISTER_USER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } from './ActionTypes';
  
  const initialState = {
    loading: false,
    error: null,
    registeredUser: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER:
        return { ...state, loading: true, error: null, registeredUser: null };
      case REGISTER_SUCCESS:
        return { ...state, loading: false, registeredUser: action.payload };
      case REGISTER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  