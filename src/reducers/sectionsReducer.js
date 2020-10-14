export const sectionsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SECTIONS":
      return action.payload;
    case "ADD_SECTION":
      return [...state, action.payload];
    default:
      return state;
  }
};
