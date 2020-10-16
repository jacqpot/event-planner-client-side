// houses data and methods.

import React, { Component } from "react";
import { connect } from "react-redux";
import EventsList from "./EventsList"
import { fetchEvents } from "../actions/eventsActions";


export class EventsContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        <EventsList />    
      </div>
      );
  }
}



export default connect(null, { fetchEvents })(EventsContainer);
