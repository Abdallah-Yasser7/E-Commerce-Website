import { useInsertData } from './../../hooks/useInsertData';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, GET_ALL_WISHLIST } from "../type";
import { useDeleteData } from '../../hooks/useDeleteData';
import { useGetData } from './../../hooks/useGetData';


export const addProductToWishList = (body) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/wishlist`, body);
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: res,
    });
    console.log(res);
  } catch (e) {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: e.response,
    })
  }
};

export const removeProductFromWishList = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/wishlist/${id}`);
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: res,
    });
    console.log(res);
  } catch (e) {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: e.response,
    })
  }
};

export const getAllWishList = () => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/wishlist`);
    dispatch({
      type: GET_ALL_WISHLIST,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_WISHLIST,
      payload: e.response,
    })
  }
};
