import { useInsertData } from './../../hooks/useInsertData';
import { ADD_COUPON, GET_ALL_COUPON, DELETE_COUPON, GET_ONE_COUPON, UPDATE_COUPON } from "../type";
import { useGetData } from './../../hooks/useGetData';
import { useDeleteData } from '../../hooks/useDeleteData';
import { useUpdateData } from './../../hooks/useUpdateData';


export const addCoupon = (body) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/coupons`, body);
    dispatch({
      type: ADD_COUPON,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: ADD_COUPON,
      payload: e.response,
    })
  }
};

export const getAllCoupon = (limit, page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/coupons?limit=${limit}&page=${page}`);
    dispatch({
      type: GET_ALL_COUPON,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_COUPON,
      payload: e.response,
    })
  }
};

export const deleteCoupon = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/coupons/${id}`);
    dispatch({
      type: DELETE_COUPON,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: DELETE_COUPON,
      payload: e.response,
    })
  }
};

export const getOneCoupon = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/coupons/${id}`);
    dispatch({
      type: GET_ONE_COUPON,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_COUPON,
      payload: e.response,
    })
  }
};

export const updateCoupon = (id, body) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/coupons/${id}`, body);
    dispatch({
      type: UPDATE_COUPON,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_COUPON,
      payload: e.response,
    })
  }
};
