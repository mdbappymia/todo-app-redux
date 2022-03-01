const initialState = {
  posts: [],
  error: false,
  isLoading: false,
};
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "ITEMS_HAVE_ERROR":
      return { ...state, error: action.hasError };
    case "ITEMS_ARE_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "ITEMS_FETCH_DATA_SUCCESS":
      return { ...state, posts: action.items };
    default:
      return state;
  }
}
