import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../sass/main.scss";
export class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <h1 className="title">Event Planner</h1>
        <div>
          <Button href="/" variant="contained" color="#58694">
            Home
          </Button>
          <Button href="/events" variant="contained" color="#58694">
            Events
          </Button>
        </div>
      </div>
    );
  }
}

export default Navbar;
