import { combineReducers } from "redux";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_DATA":
      return action.payload;
    default:
      return state;
  }
};

const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
  searchTerm: searchTermReducer,
});

export default rootReducer;
