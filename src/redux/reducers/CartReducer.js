import { ADD_PRODUCT_TO_CART, ALL_USER_CART, DELETE_ALL_CART, DELETE_ONE_CART, UPDATE_COUNT_CART, APPLY_COUPON_CART } from "../type";

const initialValue = {
  addProductToCart: [],
  allUserCart: [],
  deleteAllCart: [],
  deleteOneCart: [],
  updateCountCart: [],
  applyCoupon: [],
};

const CartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        addProductToCart: action.payload,
      };
    case ALL_USER_CART:
      return {
        ...state,
        allUserCart: action.payload,
      };
    case DELETE_ALL_CART:
      return {
        ...state,
        deleteAllCart: action.payload,
      };
    case DELETE_ONE_CART:
      return {
        ...state,
        deleteOneCart: action.payload,
      };
    case UPDATE_COUNT_CART:
      return {
        ...state,
        updateCountCart: action.payload,
      };
    case APPLY_COUPON_CART:
      return {
        ...state,
        applyCoupon: action.payload,
      };
      default:
        return state;
  }
};

export default CartReducer;