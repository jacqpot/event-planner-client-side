import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSections } from "../actions/sectionsActions";
import SectionForm from "./SectionForm";


export class SectionsContainer extends Component {
  componentDidMount() {
    this.props.fetchSections();
    console.log(fetchSections());
  }

  render() {
    return (
      <div>
        
        <SectionForm evenId={this.props.evenId} />
      </div>
    );
  }
}

export default connect(null, { fetchSections })(SectionsContainer);
