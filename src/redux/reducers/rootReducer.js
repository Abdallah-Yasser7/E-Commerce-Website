import { combineReducers } from 'redux';
import categoryReducer from "./categoryReducer"
import brandReducer from './BrandReducer';

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
})
