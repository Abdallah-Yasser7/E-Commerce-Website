import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, GET_ALL_WISHLIST } from "../type";

const initialValue = {
  addToWishList: [],
  removeFromWishList: [],
  getAllWishList: [],
};

const wishListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addToWishList: action.payload,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeFromWishList: action.payload,
      };
    case GET_ALL_WISHLIST:
      return {
        ...state,
        getAllWishList: action.payload,
      };
      default:
        return state;
  }
};

export default wishListReducer;