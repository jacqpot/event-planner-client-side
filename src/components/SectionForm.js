import React, { Component } from "react";
import { connect } from "react-redux";

import { addSection } from "../actions/sectionsActions";

class SectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      startTime: "",
      duration: 15,
      event_id: props.evenId,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSection(this.state);
    this.setState({
      title: "",
      description: "",
      startTime: "",
      duration: 15
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>New section Form</h3>

        <br />
        <label>Title:</label>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
        />
        <br />
        <label>Start Time:</label>
        <input
          type="time"
          value={this.state.startTime}
          onChange={this.handleChange}
          name="startTime"
        />
        <br />
        <label>Duration:</label>
        <input
          type="text"
          value={parseInt(this.state.duration)}
          onChange={this.handleChange}
          name="duration"
        />
        <br />

        <input type="submit" value="Create Section" />
      </form>
    );
  }
}

export default connect(null, { addSection })(SectionForm);
