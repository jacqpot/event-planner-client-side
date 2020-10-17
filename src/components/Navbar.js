import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <Grid className="NavBar">
            <NavLink to="/">
              
              Home

              </NavLink>
            <NavLink to="/events">

              Events

              </NavLink>
            <NavLink to="/about">

              About

              </NavLink>
            <NavLink to="/new">

              New Event

              </NavLink>
      </Grid>
    );
  }
}

export default Navbar;
