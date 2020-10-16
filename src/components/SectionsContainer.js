import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSections } from "../actions/sectionsActions";
import SectionForm from "./SectionForm";
import SectionList from "./sectionList";


export class SectionsContainer extends Component {
  componentDidMount() {
    this.props.fetchSections();
    console.log(fetchSections());
  }

  render() {
    return (
      <div>
        <SectionList sections={this.props.even.sections} />
        <SectionForm evenId={this.props.evenId} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    even: state.events.find((ev) => ev.id.toString() === props.match.params.id),
  };
};

export default connect(mapStateToProps)(SectionsContainer);
