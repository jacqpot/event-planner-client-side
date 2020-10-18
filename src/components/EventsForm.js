import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "../style/App.css";
import { addEvent } from "../actions/eventsActions";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

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
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="stretch"
        spacing={2}
      >
        <form onSubmit={this.handleSubmit}>
          <h3>New Event Form</h3>

          <br />
          <Grid>
            <TextField
              id="standard-basic"
              label="Event Title:"
              variant="outlined"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
            />
          </Grid>
          <br />

          <Grid>
            <TextField
              id="standard-basic"
              label="Description:"
              variant="outlined"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            />
          </Grid>
          <br />
          <Grid>
            <Typography id="Date">Date</Typography>
            <TextField
              aria-labelledby="Date"
              id="standard-basic"
              variant="outlined"
              type="date"
              value={this.state.date}
              onChange={this.handleChange}
              name="date"
            />
          </Grid>
          <br />
          <Grid justify="flex-end">
            <Typography id="startTime">Start</Typography>
            <TextField
              aria-labelledby="startTime"
              id="standard-basic"
              variant="outlined"
              type="time"
              value={this.state.start}
              onChange={this.handleChange}
              name="start"
            />
          </Grid>
          <br />
          <Grid>
            <Typography id="finishTime">finish</Typography>
            <TextField
              aria-labelledby="finishTime"
              id="standard-basic"
              variant="outlined"
              type="time"
              value={this.state.finish}
              onChange={this.handleChange}
              name="finish"
            />
          </Grid>
          <br />
          <input component="Button" type="submit" value="Create Event" />
        </form>
      </Grid>
    );
  }
}

export default connect(null, { addEvent })(EventsForm);
