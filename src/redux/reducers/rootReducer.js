import { combineReducers } from 'redux';
import categoryReducer from "./categoryReducer"
import brandReducer from './BrandReducer';
import { subCategoryReducer } from './subCategoryReducer';
import { productReducer } from './productReducer';
import authReducer from './authReducer';
import rateReducer from './rateReducer';

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subCategoryReducer,
  allProduct: productReducer,
  authReducer: authReducer,
  rateReducer: rateReducer,
})
