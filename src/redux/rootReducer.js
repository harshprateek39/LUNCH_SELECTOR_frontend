import { combineReducers } from "redux";
import { userReducer } from "./userRedux/userReducer";
import { TotalItemReducer } from "./userRedux/TotalItemReducer";
const rootReducer = combineReducers({
    userReducer,
    TotalItemReducer
});
export default rootReducer;