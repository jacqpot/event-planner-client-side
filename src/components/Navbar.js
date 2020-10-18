import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../style/App.css";
export class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Grid
          style={{
            backgroundColor: "351e29",
          }}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <h1 className="title">Event Planner</h1>
          <Button href="/" variant="contained" color="primary">
            Home
          </Button>
          <Button href="/events" variant="contained" color="primary">
            Events
          </Button>
          <Button href="/about" variant="contained" color="primary">
            About
          </Button>
        </Grid>
      </div>
    );
  }
}

export default Navbar;
