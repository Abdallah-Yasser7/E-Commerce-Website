import { CREATE_USER, LOGIN_USER } from "../type";

const initialValue = {
  createUser: [],
  loginUser: [],
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
      default:
        return state;
  }
};

export default authReducer;