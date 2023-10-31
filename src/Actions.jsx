export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const setSearchTerm = (term) => ({
  type: "SET_SEARCH_TERM",
  payload: term,
});
