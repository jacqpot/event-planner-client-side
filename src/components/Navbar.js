import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../sass/main.scss";
export class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <h1 className="title">Event Planner</h1>
        <div>
          <Button href="/" class="btn btn--white btn--animated">
            Home
          </Button>
          <Button href="/events" class="btn btn--white btn--animated">
            Events
          </Button>
        </div>
      </div>
    );
  }
}

export default Navbar;
