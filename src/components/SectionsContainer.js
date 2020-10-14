import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSections } from "../actions/sectionsActions";
import SectionForm from "./SectionForm";

export class SectionsContainer extends Component {
  componentDidMount() {
    this.props.fetchSections();
  }

  render() {
    return (
      <div>
        <SectionForm />
      </div>
    );
  }
}

export default connect(null, { fetchSections })(SectionsContainer);
