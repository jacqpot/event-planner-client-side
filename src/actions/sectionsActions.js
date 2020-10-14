export const fetchSections = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/sections")
      .then((resp) => resp.json())
      .then((parts) => dispatch({ type: "FETCH_SECTIONS", payload: parts }));
  };
};
