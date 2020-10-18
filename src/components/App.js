import React, { Component } from "react";

import Router from "./Router";
import NavBar from "./Navbar";
import { fetchEvents } from "../actions/eventsActions";
import { connect } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import "../style/App.css";
export class App extends Component {
  componentDidMount() {
    // console.log(this)
    this.props.fetchEvents();
  }
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: "#f0f8ea" },
        secondary: { main: "#351e29" },
      },
    });
    return (
      <MuiThemeProvider theme={theme}>
        <div className="body">
          <NavBar />
          <Router />
          <footer className="footer">say my name</footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(null, { fetchEvents })(App);
