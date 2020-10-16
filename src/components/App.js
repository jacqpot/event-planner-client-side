import React, { Component } from "react";

import Router from "./Router";
import NavBar from "./Navbar";
import { fetchEvents } from "../actions/eventsActions"
import { connect } from "react-redux"
export class App extends Component {
  componentDidMount() {
    // console.log(this)
    this.props.fetchEvents()
}
  render(){

    return (
      <div>
      <NavBar />
      <Router />
    </div>
  );
}
};

export default connect(null, { fetchEvents })(App)
