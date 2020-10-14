import React from "react";

import Router from "./Router";
import EventsContainer from "./EventsContainer";
import SectionsContainer from "./SectionsContainer";
import NavBar from "./Navbar";
const App = () => {
  return (
    <div>
      <NavBar />
      <Router />
      <EventsContainer />
      <SectionsContainer />
    </div>
  );
};

export default App;
