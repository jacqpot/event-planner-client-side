// houses data and methods.

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchEvents } from "../actions/eventsActions";
import SectionForm from "./EventsForm";
import SectionList from "./EventsList";

export class EventsContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return <div></div>;
  }
}

export default connect(null, { fetchEvents })(EventsContainer);
