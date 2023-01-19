import * as types from "./actionTypes";


export const getUserRequest = () => {
  return {
    type: types.GET_USER_REQUEST,
  };
};

export const getUserSuccess = (payload) => {
  return {
    type: types.GET_USER_SUCCESS,
    payload,
  };
};

export const getUserFailure = () => {
  return {
    type: types.GET_USER_FAILURE,
  };
};


