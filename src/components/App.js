import React, { Component } from "react";

import Router from "./Router";
import NavBar from "./Navbar";
import { fetchEvents } from "../actions/eventsActions";
import { connect } from "react-redux";

import "../style/Navbar.css";
import "../style/App.css";
export class App extends Component {
  componentDidMount() {
    // console.log(this)
    this.props.fetchEvents();
  }
  render() {
    return (
      <div className="body">
        <div className="navbar">
          <NavBar />
        </div>
        <Router />
        <footer className="footer">EVENT PLANNER 2020</footer>
      </div>
    );
  }
}

export default connect(null, { fetchEvents })(App);
