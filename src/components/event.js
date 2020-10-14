import React, { Component } from "react";
import EventList from "./EventsList";
const Event = ({ even }) => {
  // debugger;
  return (
    <div>
      {console.log(even)}
      <li>
        <h2>
          {" "}
          <button>{even.title}</button>
        </h2>
        <h4>{even.description}</h4>
        <p>
          - {even.set_date || even.date} - {even.set_start || even.start} -{" "}
          {even.set_finish || even.finish}
        </p>
      </li>
    </div>
  );
};

export default Event;
