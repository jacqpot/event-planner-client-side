import React, { Component } from "react";
import { connect } from "react-redux";

import { addSection } from "../actions/sectionsActions";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

class SectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      startTime: "",
      duration: 15,
      event_id: props.even.Id,
    };
  }
  duration = [15, 30, 45, 60];
  timeConstraints = {
    hours: {
      min: this.props.even.start,
      max: this.props.even.finish - 1,
    },
    minutes: {
      step: 15,
    },
  };

  handleTimeChange = (e) => {
    console.log(e._d);
    this.setState({
      startTime: e._d,
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSection(this.state, this.props.history);
    this.setState({
      title: "",
      description: "",
      startTime: "",
      duration: 15,
    });
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
          <h3>New section Form</h3>

          <br />
          <Grid>
            <TextField
              type="text"
              id="standard-basic"
              label="Title:"
              variant="outlined"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
            />
          </Grid>
          <br />
          <Grid>
            <TextField
              type="text"
              id="standard-basic"
              label="Description:"
              variant="outlined"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            />
          </Grid>
          <br />
          <Grid>
            <Typography id="Start-time">Start time</Typography>

            <Datetime
              aria-labelledby="Start-time"
              id="standard-basic"
              variant="outlined"
              dateFormat={false}
              closeOnClickOutside={true}
              timeConstraints={this.timeConstraints}
              initialViewDate={new Date(this.props.even.date)}
              value={this.state.startTime}
              onChange={this.handleTimeChange}
              name="startTime"
            />
          </Grid>
          <br />
          <Grid>
            <Typography id="Duration">How long will this take</Typography>
            <select
              aria-labelledby="Duration"
              id="standard-basic"
              variant="outlined"
              type="text"
              value={this.state.duration}
              onChange={this.handleChange}
              name="duration"
            >
              <option value={15}>15m</option>
              <option value={30}>30m</option>
              <option value={45}>45m</option>
              <option value={60}>60m</option>
            </select>
          </Grid>
          <br />

          <input type="submit" value="Create Section" />
        </form>
      </Grid>
    );
  }
}

export default connect(null, { addSection })(SectionForm);
