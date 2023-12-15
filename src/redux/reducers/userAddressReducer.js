import { CREATE_USER_ADDRESS, GET_ALL_USER_ADDRESS, DELETE_USER_ADDRESS, UPDATE_USER_ADDRESS, GET_ONE_USER_ADDRESS } from "../type";

const initialValue = {
  createUserAddress: [],
  allUserAddress: [],
  deleteUserAddress: [],
  updateUserAddress: [],
  getOneUserAddress: [],
};

const userAddressReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_USER_ADDRESS:
      return {
        ...state,
        createUserAddress: action.payload,
      };
    case GET_ALL_USER_ADDRESS:
      return {
        ...state,
        allUserAddress: action.payload,
      };
    case DELETE_USER_ADDRESS:
      return {
        ...state,
        deleteUserAddress: action.payload,
      };
    case UPDATE_USER_ADDRESS:
      return {
        ...state,
        updateUserAddress: action.payload,
      };
    case GET_ONE_USER_ADDRESS:
      return {
        ...state,
        getOneUserAddress: action.payload,
      };
      default:
        return state;
  }
};

export default userAddressReducer;