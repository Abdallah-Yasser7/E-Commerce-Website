import { useDeleteData } from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { useUpdateData } from "../../hooks/useUpdateData";
import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY, GET_ALL_SUB_CATEGORY, DELETE_SUB_CATEGORY, UPDATE_SUB_CATEGORY } from "../type";
import { useInsertData } from "./../../hooks/useInsertData";

export const createSubCategory = (data) => async (dispatch) => {
  try {
    const res = await useInsertData("/api/v1/subcategories", data);
    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};

export const getAllSubCategory = () => async (dispatch) => {
  try {
    const res = await useGetData("/api/v1/subcategories");
    dispatch({
      type: GET_ALL_SUB_CATEGORY,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_SUB_CATEGORY,
      payload: "Error" + e,
    });
  }
};

export const getSubCategory = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
    dispatch({
      type: GET_SUB_CATEGORY,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};

export const deleteSubCategory = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/subcategories/${id}`);
    dispatch({
      type: DELETE_SUB_CATEGORY,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DELETE_SUB_CATEGORY,
      payload: "Error" + e,
    });
  }
};

export const updateSubCategory = (id, body) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/subcategories/${id}`, body);
    dispatch({
      type: UPDATE_SUB_CATEGORY,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_SUB_CATEGORY,
      payload: "Error" + e,
    });
  }
};
