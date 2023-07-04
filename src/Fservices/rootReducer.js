import { combineReducers } from "redux";
import userReducer from "./faculty/userReducer";
import authReducer from "./faculty/auth/authReducer";

//import bookReducer from "./book/bookReducer";

const rootReducer = combineReducers({
  user: userReducer,
 // book: bookReducer,
  auth: authReducer,
});

export default rootReducer;
