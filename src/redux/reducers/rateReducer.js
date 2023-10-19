import { CREATE_RATE, GET_ALL_RATE, DELETE_RATE, UPDATE_RATE } from "../type";

const initialValue = {
  createRate: [],
  getAllRate: [],
  deleteRate: [],
  updateRate: [],
};

const rateReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_RATE:
      return {
        ...state,
        createRate: action.payload,
      };
    case GET_ALL_RATE:
      return {
        ...state,
        getAllRate: action.payload,
      };
    case DELETE_RATE:
      return {
        ...state,
        deleteRate: action.payload,
      };
    case UPDATE_RATE:
      return {
        ...state,
        updateRate: action.payload,
      };
      default:
        return state;
  }
};

export default rateReducer;