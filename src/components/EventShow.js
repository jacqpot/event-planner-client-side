import React from "react";
import { connect } from "react-redux";

import SectionList from './sectionList'
import SectionForm from './SectionForm'

const EventShow = ({ even, history }) => {
  if (even) {
    console.log(even);
    return (
      <div>
        <h2>{even.title}</h2>
        <h4>{even.description}</h4>
        <p>
          - {even.set_date || even.date} - {even.set_start || even.start} -{" "}
          {even.set_finish || even.finish}
        </p>
        <h4> Event Breakdown</h4>
        <SectionList event={even}/>
        <SectionForm evenId={even.id} history={history}/>

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
