import React from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const Event = ({ even }) => {
  // debugger;
  return (
    <div>
      <li>
        <h2>
          {" "}
          <NavLink to={`/events/${even.id}`}>{even.title}</NavLink>
        </h2>
        <h4>{even.description}</h4>

        <p>- {even.set_date || even.date}</p>
      </li>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { events: state.id };
};

export default connect(mapStateToProps)(Event);
