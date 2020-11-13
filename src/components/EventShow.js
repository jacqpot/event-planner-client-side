import React from "react";
import { connect } from "react-redux";

import SectionList from "./sectionList";
import SectionForm from "./SectionForm";
import Grid from "@material-ui/core/Grid";

const EventShow = ({ even, history }) => {
  if (even) {
    let options = {
      timeZone: "GMT",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    let timeOptions = {
      timeZone: "GMT",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    let date = new Date(even.date);
    let formatedDate = new Intl.DateTimeFormat("en-us", options).format(date);
    let start = new Date(even.start);
    let formatedStart = new Intl.DateTimeFormat("en-US", timeOptions).format(
      start
    );
    let finish = new Date(even.finish);
    let formatedFinish = new Intl.DateTimeFormat("en-US", timeOptions).format(
      finish
    );
    console.log(even.date);
    return (
      <div>
        <Grid>
          <Grid>
            <div>
              <h2>{even.title}</h2>
              <h4>{even.description}</h4>
              <p>
                - {formatedDate} -from- {formatedStart} - {formatedFinish}
              </p>
              <h4> Event Schedule</h4>
              <SectionList event={even} />
            </div>
          </Grid>
          <Grid>
            <div>
              <SectionForm evenId={even.id} history={history} />
            </div>
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
