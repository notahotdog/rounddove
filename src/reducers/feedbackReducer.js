const feedbackReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FEEDBACK":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

export default feedbackReducer;
