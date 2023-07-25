import { GET_ERROR, CREATE_PRODUCT, GET_ALL_PRODUCT } from '../type';

const initialValue = {
  product: [],
  allProduct: [],
  loading: true,
}

export const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCT:
      return{
        allProduct: action.payload,
        loading: false
      }
    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };
    default:
      return state;
  }
}
