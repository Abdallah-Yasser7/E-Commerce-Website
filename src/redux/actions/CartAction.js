import { useInsertData } from './../../hooks/useInsertData';
import { ADD_PRODUCT_TO_CART, ALL_USER_CART, DELETE_ALL_CART, DELETE_ONE_CART, UPDATE_COUNT_CART, APPLY_COUPON_CART } from "../type";
import { useGetData } from '../../hooks/useGetData';
import { useDeleteData } from './../../hooks/useDeleteData';
import { useUpdateData } from './../../hooks/useUpdateData';


export const addProductToCart = (data) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/cart`, data);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: e.response,
    })
  }
};

export const allUserCart = () => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/cart`);
    dispatch({
      type: ALL_USER_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: ALL_USER_CART,
      payload: e.response,
    })
  }
};

export const deleteAllCart = () => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/cart`);
    dispatch({
      type: DELETE_ALL_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: DELETE_ALL_CART,
      payload: e.response,
    })
  }
};

export const deleteOneCart = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/cart/${id}`);
    dispatch({
      type: DELETE_ONE_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: DELETE_ONE_CART,
      payload: e.response,
    })
  }
};

export const updateCount = (id, body) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/cart/${id}`, body);
    dispatch({
      type: UPDATE_COUNT_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_COUNT_CART,
      payload: e.response,
    })
  }
};

export const applyCoupon = (body) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/cart/applyCoupon`, body);
    dispatch({
      type: APPLY_COUPON_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: APPLY_COUPON_CART,
      payload: e.response,
    })
  }
};
