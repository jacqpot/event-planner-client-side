import React from "react";
import Grid from "@material-ui/core/Grid";

const Section = ({ section }) => {
  // debugger;
  let options = {
    timeZone: "GMT",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  let date = new Date(section.startTime);
  let formatedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  console.log(
    "section.startTime =",
    section.startTime,
    "date =",
    date,
    "formatedDate =",
    formatedDate
  );
  return (
    <Grid>
      <h4>
        {formatedDate} - {section.title} - {section.duration} minutes
      </h4>
    </Grid>
  );
};

export default Section;
