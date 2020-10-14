import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSections } from "../actions/sectionsActions";

export class SectionsContainer extends Component {
  componentDidMount() {
    this.props.fetchSections();
  }

  render() {
    return <div>Sections Container</div>;
  }
}

export default connect(null, { fetchSections })(SectionsContainer);
