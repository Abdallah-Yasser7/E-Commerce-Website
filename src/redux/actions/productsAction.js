import { useDeleteData } from "../../hooks/useDeleteData"
import { useGetData } from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { useUpdateDataWithImage } from "../../hooks/useUpdateData"
import { GET_ERROR, CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ALL_PRODUCT_BY_BRAND, GET_ALL_PRODUCT_BY_CATEGORY, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE, DELETE_PRODUCT, UPDATE_PRODUCT } from "../type"


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

export const getAllProduct = (limit, page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`)
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

export const getAllProductByCategory = (limit, categoryId, page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?limit=${limit}&category=${categoryId}&page=${page}`)
    dispatch({
      type: GET_ALL_PRODUCT_BY_CATEGORY,
      payload: res,
      loading: true
    })
  } catch (e) {
    dispatch({
      type: GET_ALL_PRODUCT_BY_CATEGORY,
      payload: "Error" + e,
    })
  }
}

export const getAllProductByBrand = (limit, brandId, page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?limit=${limit}&brand=${brandId}&page=${page}`)
    dispatch({
      type: GET_ALL_PRODUCT_BY_BRAND,
      payload: res,
      loading: true
    })
  } catch (e) {
    dispatch({
      type: GET_ALL_PRODUCT_BY_BRAND,
      payload: "Error" + e,
    })
  }
}

export const getProductSearch = (queryString) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?${queryString}`)
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

//get one product with id
export const getOneProduct = (id) => async (dispatch) => {
  try {
      const res = await useGetData(`/api/v1/products/${id}`);
      dispatch({
          type: GET_PRODUCT_DETAILS,
          payload: res,
          loading: true
      })
      
  } catch (e) {
      dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
      })
  }
}

export const getProductLike = (id) => async (dispatch) => {
  try {
      const res = await useGetData(`/api/v1/products/?category=${id}`);
      dispatch({
          type: GET_PRODUCT_LIKE,
          payload: res,
          loading: true
      })
      
  } catch (e) {
      dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
      })
  }
}

export const deleteProduct = (id) => async (dispatch) => {
  try {
      const res = await useDeleteData(`/api/v1/products/${id}`);
      dispatch({
          type: DELETE_PRODUCT,
          payload: res,
          loading: true
      })
      
  } catch (e) {
      dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
      })
  }
}

export const updateProduct = (id, formData) => async (dispatch) => {
  try {
      const res = await useUpdateDataWithImage(`/api/v1/products/${id}`, formData);
      dispatch({
          type: UPDATE_PRODUCT,
          payload: res,
          loading: true
      })
      
  } catch (e) {
      dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
      })
  }
}
