import { CREATE_ORDER_CASH } from "../type";

const initialValue = {
  createOrderCash: [],
};

const CheckoutReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_ORDER_CASH:
      return {
        ...state,
        createOrderCash: action.payload,
      };
      default:
        return state;
  }
};

export default CheckoutReducer;