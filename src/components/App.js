import React from "react";

import Router from "./Router";
import Home from "./Home";
import NavBar from "./Navbar";
const App = () => {
  return (
    <div>
      <NavBar />
      <Router />
      <Home />
    </div>
  );
};

export default App;
