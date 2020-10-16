export const fetchSections = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/sections")
      .then((resp) => resp.json())
      .then((sections) =>
        dispatch({ type: "FETCH_SECTIONS", payload: sections })
      );
  };
};

export const addSection = (section) => {
  return (dispatch) => {
    fetch("http://localhost:3001/sections", {
      method: "POST",
      body: JSON.stringify(section),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((section) =>{
         dispatch({ type: "ADD_SECTION", payload: section })
         dispatch({ type: "UPDATE_EVENT", payload: section})
         });
  };
};
