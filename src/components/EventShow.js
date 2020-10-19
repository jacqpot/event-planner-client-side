import React from "react";
import { connect } from "react-redux";

import SectionList from "./sectionList";
import SectionForm from "./SectionForm";
import Grid from "@material-ui/core/Grid";

const EventShow = ({ even, history }) => {
  if (even) {
    let options = {
      timeZone: "MST",
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
    console.log(formatedStart);
    return (
      <div>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="space-evenly"
          alignItems="center"
          id="sections"
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
              <h2>{even.title}</h2>
              <h4>{even.description}</h4>
              <p>
                - {formatedDate} -from- {formatedStart} - {formatedFinish}
              </p>
              <h4> Event Schedule</h4>
              <SectionList event={even} />
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
