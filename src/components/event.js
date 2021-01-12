import React from "react";
import "../sass/main.scss";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const Event = ({ even }) => {
  // debugger;
  let options = {
    timeZone: "GMT",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  let date = new Date(even.date);
  let formatedDate = new Intl.DateTimeFormat("en-us", options).format(date);

  return (
    <div class="col-1-of-4">
      <div className="feature-box">
        <h3 className="heading-tertiary u-margin-bottom-small">
          <NavLink to={`/events/${even.id}`}>{even.title}</NavLink>
        </h3>
        <p className="feature-box__text">{formatedDate}</p>
        <p className="feature-box__text">{even.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { events: state.id };
};

export default connect(mapStateToProps)(Event);
