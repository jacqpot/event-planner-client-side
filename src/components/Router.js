import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import EventsForm from "./EventsForm";
import EventShow from "./EventShow";
import { EventsContainer } from "./EventsContainer";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/events/:id" component={EventShow} />
      <Route path="/new" component={EventsForm} />
      <Route exact path="/events" component={EventsContainer} />

      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Router;
