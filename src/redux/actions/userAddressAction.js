import { useInsertData } from './../../hooks/useInsertData';
import { CREATE_USER_ADDRESS, GET_ALL_USER_ADDRESS, DELETE_USER_ADDRESS, UPDATE_USER_ADDRESS, GET_ONE_USER_ADDRESS } from "../type";
import { useGetData } from './../../hooks/useGetData';
import { useDeleteData } from './../../hooks/useDeleteData';
import { useUpdateData } from './../../hooks/useUpdateData';


export const createUserAddress = (data) => async (dispatch) => {
  try {
    const res = await useInsertData("/api/v1/addresses", data);
    dispatch({
      type: CREATE_USER_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CREATE_USER_ADDRESS,
      payload: e.response,
    })
  }
};

export const getAllUserAddress = () => async (dispatch) => {
  try {
    const res = await useGetData("/api/v1/addresses");
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: e.response,
    })
  }
};

export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/addresses/${id}`);
    dispatch({
      type: DELETE_USER_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER_ADDRESS,
      payload: e.response,
    })
  }
};

export const updateUserAddress = (id, body) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/addresses/${id}`, body);
    dispatch({
      type: UPDATE_USER_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_ADDRESS,
      payload: e.response,
    })
  }
};

export const getOneUserAddress = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/addresses/${id}`);
    dispatch({
      type: GET_ONE_USER_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_USER_ADDRESS,
      payload: e.response,
    })
  }
};
