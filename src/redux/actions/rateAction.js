import { useInsertData } from './../../hooks/useInsertData';
import { CREATE_RATE, GET_ALL_RATE, DELETE_RATE, UPDATE_RATE } from "../type";
import { useGetData } from '../../hooks/useGetData';
import { useDeleteData } from '../../hooks/useDeleteData';
import { useUpdateData } from '../../hooks/useUpdateData';


export const createRate = (id, data) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/products/${id}/reviews`, data);
    dispatch({
      type: CREATE_RATE,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CREATE_RATE,
      payload: e.response,
    })
  }
};

export const getAllRate = (id, page, limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`);
    dispatch({
      type: GET_ALL_RATE,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_RATE,
      payload: e.response,
    })
  }
};

export const deleteRate = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/reviews/${id}`);
    dispatch({
      type: DELETE_RATE,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: DELETE_RATE,
      payload: e.response,
    })
  }
};

export const updateRate = (id, body) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/reviews/${id}`, body);
    dispatch({
      type: UPDATE_RATE,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_RATE,
      payload: e.response,
    })
  }
};
