const initialState = {
  SearchData: [],
};
const SearchReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  const {type, payload} = action;

  switch (type) {
    case 'SEARCH_DATA':
      return {state, SearchData: payload};
    default:
      return {state};
  }
};

export default SearchReducer;
