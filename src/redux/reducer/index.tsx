import { combineReducers } from "redux";
import { postReducer } from "./productReducer/productReducer";

const rootReducer = combineReducers({
  products: postReducer,
});
export default rootReducer;
