import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { GET_ERROR, CREATE_PRODUCT } from "../type"


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