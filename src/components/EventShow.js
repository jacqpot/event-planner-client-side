import React from "react";
import { connect } from "react-redux";

import SectionsContainer from './SectionsContainer'

const EventShow = ({ even }) => {
  if (even) {
    console.dir(even);
    return (
      <div>
        <h2>{even.title}</h2>
        <h4>{even.description}</h4>
        <p>
          - {even.set_date || even.date} - {even.set_start || even.start} -{" "}
          {even.set_finish || even.finish}
        </p>
        <h4> Event Breakdown</h4>
        <SectionsContainer even={even}/>
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
