import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from "../type";

const initialValue = {
  category: [],
  createCategory: [],
  oneCategory: [],
  deleteCategory: [],
  updateCategory: [],
  loading: true,
};

const categoryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        createCategory: action.payload,
        loading: false,
      };
    case GET_ONE_CATEGORY:
      return {
        oneCategory: action.payload,
        loading: false,
      };
    case DELETE_CATEGORY:
      return {
        deleteCategory: action.payload,
        loading: false,
      };
    case UPDATE_CATEGORY:
      return {
        updateCategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        category: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default categoryReducer;
