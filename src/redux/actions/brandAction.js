import { useGetData } from "../../hooks/useGetData";
import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND, GET_ONE_BRAND, DELETE_BRAND, UPDATE_BRAND } from "../type";
import { useInsertDataWithImage } from './../../hooks/useInsertData';
import { useDeleteData } from './../../hooks/useDeleteData';
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

export const getAllBrand = (limit, page) => async (dispatch) => {
  const res = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`);
  try {
    dispatch({
      type: GET_ALL_BRAND,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    })
  }
};

export const createBrand = (formData) => async (dispatch) => {
  const res = await useInsertDataWithImage(`/api/v1/brands`, formData);
  try {
    dispatch({
      type: CREATE_BRAND,
      payload: res,
      loading: true,
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    })
  }
}

export const updateBrand = (id, formData) => async (dispatch) => {
  const res = await useUpdateDataWithImage(`/api/v1/brands/${id}`, formData);
  try {
    dispatch({
      type: UPDATE_BRAND,
      payload: res,
      loading: true,
    })
  } catch (e) {
    dispatch({
      type: UPDATE_BRAND,
      payload: "Error" + e,
    })
  }
}

export const getOneBrand = (id) => async (dispatch) => {
  const res = await useGetData(`/api/v1/brands/${id}`);
  try {
    dispatch({
      type: GET_ONE_BRAND,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    })
  }
};

export const deleteBrand = (id) => async (dispatch) => {
  const res = await useDeleteData(`/api/v1/brands/${id}`);
  try {
    dispatch({
      type: DELETE_BRAND,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: DELETE_BRAND,
      payload: "Error" + e,
    })
  }
};
