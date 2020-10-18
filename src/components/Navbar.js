import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


export class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Grid container direction="row" justify="space-around" alignItems="center">
            <h1>Event Planner</h1>
              <Button href="/" variant="contained" color='secondary'>
              Home
              </Button>
            <Button href="/events" variant="contained" color='secondary'>
              Events
            </Button>
            <Button href="/about" variant="contained" color='secondary'>
              About
            </Button>
            <Button href="/new" variant="contained" color='secondary'>
              New Event
            </Button>
        </Grid>
      </div>
    );
  }
}

export default Navbar;
