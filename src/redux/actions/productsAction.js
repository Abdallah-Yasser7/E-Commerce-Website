import { useGetData } from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { GET_ERROR, CREATE_PRODUCT, GET_ALL_PRODUCT } from "../type"


export const createProduct = (formData) => async (dispatch) => {
  try{
    const res = await useInsertDataWithImage(`/api/v1/products`, formData)
    dispatch({
      type: CREATE_PRODUCT,
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

export const getAllProduct = () => async (dispatch) => {
  try {
    const res = await useGetData("/api/v1/products")
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: res,
      loading: true
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    })
  }
}