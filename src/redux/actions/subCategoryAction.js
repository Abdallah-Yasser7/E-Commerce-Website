import { useGetData } from "../../hooks/useGetData";
import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";
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
