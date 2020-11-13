import React, { Component } from "react";
import EventsList from "./EventsList";
import EventsForm from "./EventsForm";
import Grid from "@material-ui/core/Grid";
import "../style/App.css";
import "../style/EventsContainer.css";

export class EventsContainer extends Component {
  render() {
    // console.log(this);
    return (
      <Grid className="container">
        <Grid className="form__container">
          <div className="form__div">
            <EventsForm />
          </div>
        </Grid>
        <Grid>
          <div>
            <EventsList />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default EventsContainer;
