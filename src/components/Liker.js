import React, { Component } from "react";

export class Liker extends Component {
  state = {
    likes: 0,
  };

  onClick = (e) => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>like me</button>
        <h1>{this.state.likes}</h1>
      </div>
    );
  }
}

export default Liker;
