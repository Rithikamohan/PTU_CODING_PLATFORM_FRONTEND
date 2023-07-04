import { LOGIN_REQUEST, LOGOUT_REQUEST, SUCCESS, FAILURE } from "./authTypes";

const initialState = {
  facusername: "",
  facisLoggedIn: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
      };
    case SUCCESS:
    case FAILURE:
      return {
        username: action.payload.facusername,
        isLoggedIn: action.payload.facisLoggedIn,
      };
    default:
      return state;
  }
};

export default reducer;
