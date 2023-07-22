import { GET_ERROR, CREATE_PRODUCT } from '../type';

const initialValue = {
  product: [],
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
    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };
    default:
      return state;
  }
}
