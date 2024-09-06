import { GET_ALL_ORDER, GET_ONE_ORDER, CHANGE_PAY_ORDER, CHANGE_DELIVER_ORDER } from "../type";

const initialValue = {
  getAllOrder: [],
  getOneOrder: [],
  changePayOrder: [],
  changeDeliverOrder: [],
};

const orderReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_ALL_ORDER:
      return {
        ...state,
        getAllOrder: action.payload,
      };
    case GET_ONE_ORDER:
      return {
        ...state,
        getOneOrder: action.payload,
      };
    case CHANGE_PAY_ORDER:
      return {
        ...state,
        changePayOrder: action.payload,
      };
    case CHANGE_DELIVER_ORDER:
      return {
        ...state,
        changeDeliverOrder: action.payload,
      };
      default:
        return state;
  }
};

export default orderReducer;