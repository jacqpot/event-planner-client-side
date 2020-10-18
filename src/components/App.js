import React, { Component } from "react";

import Router from "./Router";
import NavBar from "./Navbar";
import { fetchEvents } from "../actions/eventsActions"
import { connect } from "react-redux"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./App.css"
export class App extends Component {
  componentDidMount() {
    // console.log(this)
    this.props.fetchEvents()
}
  render(){

    return (
      <div className="body">   
      <NavBar />
      <Router />
    </div>
  );
}
};

export default connect(null, { fetchEvents })(App)
