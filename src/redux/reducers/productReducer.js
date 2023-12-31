import { GET_ERROR, CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ALL_PRODUCT_BY_BRAND, GET_ALL_PRODUCT_BY_CATEGORY, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE, DELETE_PRODUCT, UPDATE_PRODUCT } from '../type';

const initialValue = {
  product: [],
  allProduct: [],
  oneProduct: [],
  productsLike: [],
  deleteProduct: [],
  updateProduct: [],
  allProductByCategory: [],
  allProductByBrand: [],
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
    case GET_ALL_PRODUCT_BY_CATEGORY:
      return{
        allProductByCategory: action.payload,
        loading: false
      }
    case GET_ALL_PRODUCT_BY_BRAND:
      return{
        allProductByBrand: action.payload,
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
      case DELETE_PRODUCT:
        return {
            ...state,
            deleteProduct: action.payload,
            loading: false,
        }
      case UPDATE_PRODUCT:
        return {
            ...state,
            updateProduct: action.payload,
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
