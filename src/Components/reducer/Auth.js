import * as actionTypes from "../actions/actionTypes";
const initialState = {
  username: "",
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Login:
      return {
        ...state,
        username: action.username,
        token: action.token,
      };
    case actionTypes.Logout:
      return {
        username: "",
        token: null,
      };

    default:
      return state;
  }
};
export default auth;
