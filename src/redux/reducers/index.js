import { combineReducers } from "redux";
import userReducer from "./userReducer";
import utilReducer from "./utilReducer";
import snackReducer from "./snackReducer";
import commonReducer from "./commonReducer";

export default combineReducers({
  common: commonReducer,
  user: userReducer,
  util: utilReducer,
  snack: snackReducer,
});
