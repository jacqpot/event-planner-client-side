import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button'

export class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
              <Button href="/" var="contained" color='primary'>
              Home
              </Button>
            <Button href="/events" var="contained" color='primary'>
              Events
            </Button>
            <Button href="/about" var="contained" color='primary'>
              About
            </Button>
            <Button href="/new" var="contained" color='primary'>
              New Event
            </Button>
      </div>
    );
  }
}

export default Navbar;
