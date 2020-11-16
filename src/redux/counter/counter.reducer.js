const INITIAL_STATE = {
  count: 0,
  countChanges: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload.by,
        countChanges: state.countChanges + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - action.payload.by,
        countChanges: state.countChanges + 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
