import { CREATE_USER, LOGIN_USER, Forget_PASSWORD, VERIFY_PASSWORD, RESET_PASSWORD, UPDATE_USER_DATA, UPDATE_USER_PASSWORD } from "../type";

const initialValue = {
  createUser: [],
  loginUser: [],
  forgetPassword: [],
  verifyPassword: [],
  resetPassword: [],
  updateUserData: [],
  updateUserPassword: [],
};

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        createUser: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      };
    case Forget_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      };
    case VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: action.payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        updateUserData: action.payload,
      };
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        updateUserPassword: action.payload,
      };
      default:
        return state;
  }
};

export default authReducer;