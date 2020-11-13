import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../style/App.css";
export class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Grid>
          <h1 className="title">Event Planner</h1>
          <Button href="/" variant="contained" color="primary">
            Home
          </Button>
          <Button href="/events" variant="contained" color="primary">
            Events
          </Button>
        </Grid>
      </div>
    );
  }
}

export default Navbar;
