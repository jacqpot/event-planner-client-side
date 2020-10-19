import React from "react";
import Section from "./Section";
import Grid from "@material-ui/core/Grid";

const SectionList = ({ event }) => {
  if (event.sections) {
    let sort = event.sections.sort(function (a, b) {
      return new Date(a.startTime) - new Date(b.startTime);
    });
    const sec = sort.map((section, i) => <Section key={i} section={section} />);

    return (
      <div>
        <Grid>{sec}</Grid>
      </div>
    );
  }
};

// const mapStateToProps = (state, props) => {
//   return {
//     even: state.events.find((ev) => ev.id.toString() === props.event),
//   };
// };

export default SectionList;
