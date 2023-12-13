import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND, DELETE_BRAND, UPDATE_BRAND } from "../type";

const initialValue = {
  createBrand: [],
  allBrand: [],
  oneBrand: [],
  deleteBrand: [],
  updateBrand: [],
  loading: true,
};

const brandReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        allBrand: action.payload,
        loading: false,
      };
    case GET_ONE_BRAND:
      return {
        oneBrand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        createBrand: action.payload,
        loading: false,
      };
    case DELETE_BRAND:
      return {
        deleteBrand: action.payload,
        loading: false,
      };
    case UPDATE_BRAND:
      return {
        updateBrand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        brand: action.payload,
        loading: true,
      };
      default:
        return state;
  }
};

export default brandReducer;