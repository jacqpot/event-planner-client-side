import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSections } from "../actions/sectionsActions";
import SectionForm from "./SectionForm";
import SectionList from "./sectionList";
import Grid from "@material-ui/core/Grid";
import "../style/App.css";

export class SectionsContainer extends Component {
  componentDidMount() {
    this.props.fetchSections();
    console.log(fetchSections());
  }

  render() {
    return (
      <Grid
        container
        spacing={1}
        direction="row"
        justify="space-evenly"
        alignItems="center"
        id="sections"
        style={{
          padding: 30,
        }}
      >
        <Grid
          style={{
            backgroundColor: "de6e4b",
            opacity: 50,
            padding: 30,
            borderRadius: 9,
          }}
        >
          <div
            style={{
              backgroundColor: "f0f3f5",
              paddingTop: 30,
              paddingRight: 30,
              paddingBottom: 50,
              paddingLeft: 20,
            }}
          >
            <SectionList sections={this.props.even.sections} />
          </div>
        </Grid>
        <Grid
          style={{
            backgroundColor: "de6e4b",
            padding: 25,
            borderRadius: 9,
          }}
        >
          <div
            style={{
              backgroundColor: "f0f3f5",
              padding: 25,
              borderRadius: 9,
            }}
          >
            <SectionForm evenId={this.props.evenId} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    even: state.events.find((ev) => ev.id.toString() === props.match.params.id),
  };
};

export default connect(mapStateToProps)(SectionsContainer);
