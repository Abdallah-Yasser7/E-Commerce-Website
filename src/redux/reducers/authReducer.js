import { CREATE_USER } from "../type";

const initialValue = {
  createUser: [],
  loading: true,
};

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        createUser: action.payload,
        loading: false,
      };
      default:
        return state;
  }
};

export default authReducer;