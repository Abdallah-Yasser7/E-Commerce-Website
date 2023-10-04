import { useInsertData } from './../../hooks/useInsertData';
import { CREATE_USER, LOGIN_USER } from "../type";


export const createUser = (data) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/auth/signup`, data);
    dispatch({
      type: CREATE_USER,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CREATE_USER,
      payload: e.response,
    })
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/auth/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    })
  }
};
