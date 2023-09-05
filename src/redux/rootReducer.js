import { combineReducers } from "redux";
import { userReducer } from "./userRedux/userReducer";
const rootReducer = combineReducers({
    userReducer
});
export default rootReducer;