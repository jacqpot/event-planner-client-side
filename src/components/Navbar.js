import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../style/App.css";
export class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <h1 className="title">Event Planner</h1>
        <div>
          <Button href="/" variant="contained" color="primary">
            Home
          </Button>
          <Button href="/events" variant="contained" color="primary">
            Events
          </Button>
        </div>
      </div>
    );
  }
}

export default Navbar;
