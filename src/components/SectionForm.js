import React, { Component } from "react";

class SectionForm extends Component {
  state = {
    title: "",
    description: "",
    startTime: "",
    duration: null,
    event_id: null,
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>New Event Form</h3>

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
          type="startTime"
          value={this.state.startTime}
          onChange={this.handleChange}
          name="startTime"
        />
        <br />
        <label>Duration:</label>
        <input
          type="time"
          value={this.state.duration}
          onChange={this.handleChange}
          name="duration"
        />
        <br />
        <label></label>
        <input
          type="hidden"
          value={this.state.event_id}
          onChange={this.handleChange}
          name="event_id"
        />
        <br />
        <input type="submit" value="Create Section" />
      </form>
    );
  }
}

export default SectionForm;
