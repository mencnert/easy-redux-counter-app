const INITIAL_STATE = {
  count: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload.by,
      };
    case "DECREMENT":
      return {
        count: state.count - action.payload.by,
      };

    default:
      return state;
  }
};

export default counterReducer;
