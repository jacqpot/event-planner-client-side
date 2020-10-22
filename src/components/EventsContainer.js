import React, { Component } from "react";
import EventsList from "./EventsList";
import EventsForm from "./EventsForm";
import Grid from "@material-ui/core/Grid";
import "../style/App.css";

export class EventsContainer extends Component {
  render() {
    console.log(this);
    return (
      <Grid
        container
        spacing={1}
        direction="row"
        justify="space-evenly"
        alignItems="center"
        id="events"
        style={{
          padding: 30,
        }}
      >
        <Grid
          style={{
            backgroundColor: "de6e4b",
            opacity: 50,
            padding: 30,
            borderRadius: 9,
          }}
        >
          <div
            style={{
              backgroundColor: "f0f3f5",
              paddingTop: 30,
              paddingRight: 30,
              paddingBottom: 50,
              paddingLeft: 20,
            }}
          >
            <EventsList />
          </div>
        </Grid>
        <Grid
          style={{
            backgroundColor: "de6e4b",
            padding: 25,
            borderRadius: 9,
          }}
        >
          <div
            style={{
              backgroundColor: "f0f3f5",
              padding: 25,
              borderRadius: 9,
            }}
          >
            <EventsForm />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default EventsContainer;
