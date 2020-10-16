import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import EventsForm from "./EventsForm";
import EventShow from "./EventShow";
import { EventsContainer } from "./EventsContainer";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/events" component={EventsContainer} />
      <Route path="/about" component={About} />
      <Route path="/new" component={EventsForm} />
      <Route exact path="/events/:id" component={EventShow} />
    </Switch>
  );
};

export default Router;
