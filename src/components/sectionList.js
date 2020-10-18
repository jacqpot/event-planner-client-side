import React from "react";
import Section from "./Section";
import Grid from "@material-ui/core/Grid";

const SectionList = ({ event }) => {
  if (event) {
    const sec = event.sections.map((section, i) => (
      <Section key={i} section={section} />
    ));

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
