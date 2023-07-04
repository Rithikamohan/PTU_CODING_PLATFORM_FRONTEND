import { combineReducers } from "redux";
import userReducer from "./admin/userReducer";
import authReducer from "./admin/auth/authReducer";

//import bookReducer from "./book/bookReducer";

const rootReducer = combineReducers({
  user: userReducer,
 // book: bookReducer,
  auth: authReducer,
});

export default rootReducer;
