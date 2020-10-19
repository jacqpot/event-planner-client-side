import React from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const Event = ({ even }) => {
  // debugger;
  let options = {
    timeZone: "cst",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  let date = new Date(even.date);
  let formatedDate = new Intl.DateTimeFormat("en-us", options).format(date);
  console.log(even.date, formatedDate);
  return (
    <div>
      <li>
        <h2>
          {" "}
          <NavLink to={`/events/${even.id}`}>{even.title}</NavLink>
        </h2>
        <h4>{even.description}</h4>

        <p>- {formatedDate}</p>
      </li>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { events: state.id };
};

export default connect(mapStateToProps)(Event);
