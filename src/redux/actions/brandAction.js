import { useGetData } from "../../hooks/useGetData";
import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND } from "../type";
import { useInsertDataWithImage } from './../../hooks/useInsertData';

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