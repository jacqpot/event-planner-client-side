import React, { Component } from "react";
import { connect } from "react-redux";

import { addEvent } from "../actions/eventsActions";
import TextField from '@material-ui/core/TextField'



class EventsForm extends Component {
  state = {
    title: "",
    description: "",
    date: 0,
    start: 0,
    finish: 0,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addEvent(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>New Event Form</h3>

        <br />
        
        <TextField id="standard-basic" label="Event Title:" 
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        />
        <br />
        
                <TextField id="standard-basic" label="Description:" 

          type="text"
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
        />
        <br />
        <label>Date:</label>
                <TextField id="standard-basic"

          type="date"
          value={this.state.date}
          onChange={this.handleChange}
          name="date"
        />
        <br />
        <label>Start time:</label>
                <TextField id="standard-basic" 

          type="time"
          value={this.state.start}
          onChange={this.handleChange}
          name="start"
        />
        <br />
        <label>finish time:</label>
                <TextField id="standard-basic"

          type="time"
          value={this.state.finish}
          onChange={this.handleChange}
          name="finish"
        />
        <br />
                <input 
 type="submit" value="Create Event" />
      </form>
    );
  }
}

export default connect(null, { addEvent })(EventsForm);
