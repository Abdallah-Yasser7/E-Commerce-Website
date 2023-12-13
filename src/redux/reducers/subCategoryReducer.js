import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY, GET_ALL_SUB_CATEGORY, DELETE_SUB_CATEGORY, UPDATE_SUB_CATEGORY } from "../type";

const initilValue = {
  subCategory: [],
  createSubCategory: [],
  allSubCategory: [],
  deleteSubCategory: [],
  updateSubCategory: [],
  loading: true,
};

export const subCategoryReducer = (state = initilValue, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        createSubCategory: action.payload,
        loading: false,
      }
    case GET_SUB_CATEGORY:
      return {
        subCategory: action.payload,
        loading: false,
      }
    case GET_ALL_SUB_CATEGORY:
      return {
        allSubCategory: action.payload,
        loading: false,
      }
    case DELETE_SUB_CATEGORY:
      return {
        deleteSubCategory: action.payload,
        loading: false,
      }
    case UPDATE_SUB_CATEGORY:
      return {
        updateSubCategory: action.payload,
        loading: false,
      }
    case GET_ERROR:
      return {
        loading: true,
        subCategory: action.payload,
      }
    default:
      return state;
  }
};
