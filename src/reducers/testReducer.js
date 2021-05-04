const testReducer = (state = [], action) => {
  switch (action.type) {
    case "TEST_FEEDBACK":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

export default testReducer;
