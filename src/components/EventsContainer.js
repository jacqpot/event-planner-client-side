import React, { Component } from "react";
import EventsList from "./EventsList";
import EventsForm from "./EventsForm";
import "../style/App.css";
import "../style/EventsContainer.css";

export class EventsContainer extends Component {
  render() {
    return (
      <div className="eventWrapper">
        <div>
          <EventsForm />
        </div>

        <div>
          <EventsList />
        </div>
      </div>
    );
  }
}

export default EventsContainer;
