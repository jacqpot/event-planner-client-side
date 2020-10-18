import React from "react";
import { connect } from "react-redux";

import SectionList from './sectionList'
import SectionForm from './SectionForm'
import Grid from '@material-ui/core/Grid';



const EventShow = ({ even, history }) => {
  if (even) {
    console.log(even);
    return (
      <div>
        <Grid  container spacing={1} direction="row" justify="space-around" alignItems="center">

        <Grid>
        <h2>{even.title}</h2>
        <h4>{even.description}</h4>
        <p>
          - {even.set_date || even.date} - {even.set_start || even.start} -{" "}
          {even.set_finish || even.finish}
        </p>
        <h4> Event Breakdown</h4>
        <SectionList event={even}/>
        </Grid>
        <Grid>
        <SectionForm evenId={even.id} history={history}/>
          
        </Grid>
        </Grid>

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
