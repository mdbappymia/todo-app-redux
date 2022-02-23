export const initialState = {
  count: 5,
};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment": {
      return {
        count: state.count + action.payload,
      };
    }
    case "decrement": {
      return {
        count: state.count - action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
