//actions will return the a type

//takes in data
export const approvedFeedbackList = (data) => {
  return {
    type: "ADD_FEEDBACK",
    payload: data,
  };
};
