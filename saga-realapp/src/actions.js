// actions.js
import {
  FETCH_DATA,
  SET_DATA,
  FETCH_DATA_FAILURE,
  SET_SEARCH_TERM,
} from "./actionTypes";

// Action creators
export const fetchData = () => ({
  type: FETCH_DATA,
});

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
