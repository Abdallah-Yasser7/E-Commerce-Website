import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"

const initialValue = {}

const middelware = [thunk]

export const store = createStore(rootReducer, initialValue, composeWithDevTools(applyMiddleware(...middelware)))