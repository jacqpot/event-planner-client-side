import React, { Component } from "react";

import Router from "./Router";
import NavBar from "./Navbar";
import { fetchEvents } from "../actions/eventsActions";
import { connect } from "react-redux";

import "../sass/main.scss";
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
        <header className="header">
          <div className="header__logo-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">
                Volenteer event planning
              </span>
              <span className="heading-primary--sub">
                simple planning solutions
              </span>
            </h1>
          </div>
        </header>
        <main>
          <Router />
        </main>
        <footer className="footer">EVENT PLANNER 2020</footer>
      </div>
    );
  }
}

export default connect(null, { fetchEvents })(App);
