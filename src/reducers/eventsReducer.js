export const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return action.payload;
    case "FETCH_EVENT":
      return action.payload;
    case "ADD_EVENT":
      return [...state, action.payload];
    default:
      return state;
  }
};
