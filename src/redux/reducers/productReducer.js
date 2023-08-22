import { GET_ERROR, CREATE_PRODUCT, GET_ALL_PRODUCT, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE } from '../type';

const initialValue = {
  product: [],
  allProduct: [],
  oneProduct: [],
  productsLike: [],
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
      case GET_PRODUCT_DETAILS:
        return {
            oneProduct: action.payload,
            loading: false,
        }
      case GET_PRODUCT_LIKE:
        return {
            ...state,
            productsLike: action.payload,
            loading: false,
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
