import { useInsertData } from './../../hooks/useInsertData';
import { CREATE_USER, LOGIN_USER, Forget_PASSWORD, VERIFY_PASSWORD, RESET_PASSWORD } from "../type";
import { useUpdateData } from './../../hooks/useUpdateData';


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

export const forgetPassword = (data) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
    dispatch({
      type: Forget_PASSWORD,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: Forget_PASSWORD,
      payload: e.response,
    })
  }
};

export const verifyPassword = (data) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
    dispatch({
      type: VERIFY_PASSWORD,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: VERIFY_PASSWORD,
      payload: e.response,
    })
  }
};

export const resetPassword = (data) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/auth/resetPassword`, data);
    dispatch({
      type: RESET_PASSWORD,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: RESET_PASSWORD,
      payload: e.response,
    })
  }
};
