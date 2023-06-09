import { useGetData } from "../../hooks/useGetData";
import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from "../type";
import { useInsertDataWithImage } from './../../hooks/useInsertData';

export const getAllCategory = (limit,page) => async (dispatch) => {
  const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`);
  try {
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
  const res = await useInsertDataWithImage(`/api/v1/categories`, formData);
  try {
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