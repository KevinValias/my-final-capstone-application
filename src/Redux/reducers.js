import { combineReducers } from "redux";

const loggedIn = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.value);
    default:
      return state;
  }
};

const user = (state = "", action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ loggedIn, user });
