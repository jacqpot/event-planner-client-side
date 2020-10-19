import React from "react";
import { connect } from "react-redux";
import Event from "./Event";

const EventsList = ({ events }) => {
  const sortedEvents = events
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .reverse();
  const even = sortedEvents.map((ev, i) => <Event key={i} even={ev} />);
  return (
    <div>
      <h3>Events</h3>
      <ul>{even}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { events: state.events };
};

export default connect(mapStateToProps)(EventsList);
