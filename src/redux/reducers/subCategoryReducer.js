import { CREATE_SUB_CATEGORY, GET_ERROR } from "../type";

const initilValue = {
  subCategory: [],
  loading: true,
};

export const subCategoryReducer = (state = initilValue, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
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
