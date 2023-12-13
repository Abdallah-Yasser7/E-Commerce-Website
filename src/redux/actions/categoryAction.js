import { useGetData } from "../../hooks/useGetData";
import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY, GET_ONE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from "../type";
import { useInsertDataWithImage } from './../../hooks/useInsertData';
import { useDeleteData } from './../../hooks/useDeleteData';
import { useUpdateDataWithImage } from './../../hooks/useUpdateData';

export const getAllCategory = (limit,page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    })
  }
};

export const createCategory = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataWithImage(`/api/v1/categories`, formData);
    dispatch({
      type: CREATE_CATEGORY,
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

export const updateCategory = (id, formData) => async (dispatch) => {
  try {
    const res = await useUpdateDataWithImage(`/api/v1/categories/${id}`, formData);
    dispatch({
      type: UPDATE_CATEGORY,
      payload: res,
      loading: true,
    })
  } catch (e) {
    dispatch({
      type: UPDATE_CATEGORY,
      payload: "Error" + e,
    })
  }
}

export const getOneCategory = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_ONE_CATEGORY,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    })
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/categories/${id}`);
    dispatch({
      type: DELETE_CATEGORY,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: DELETE_CATEGORY,
      payload: "Error" + e,
    })
  }
};