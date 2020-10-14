import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import SectionsContainer from "./SectionsContainer";

const EventShow = ({ even }) => {
  if (even) {
    return (
      <div>
        <li>
          <h2>{even.title}</h2>
          <h4>{even.description}</h4>
          <p>
            - {even.set_date || even.date} - {even.set_start || even.start} -{" "}
            {even.set_finish || even.finish}
          </p>
        </li>
        <SectionsContainer evenId={even.id} />
      </div>
    );
  } else {
    return <div> .....loading </div>;
  }
};
const mapStateToProps = (state, props) => {
  return {
    even: state.events.find((ev) => ev.id.toString() === props.match.params.id),
  };
};

export default connect(mapStateToProps)(EventShow);
