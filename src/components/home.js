import { Container } from "@material-ui/core";
import React from "react";

const Home = () => {
  return (
    <Container
      fixed
      maxWidth="sm"
      style={{ backgroundColor: "#cfe8fc", height: "40vh" }}
    >
      <div className="home">
        <h1>Event Planning</h1>
        <p>
          This App was developed too help lay-peoples plan church events. With a
          simple, easy to follow process. This was done with my Youth group in
          mind. There are several things that can be implemented to level up
          this application.
        </p>
      </div>
      <ul>
        <li>
          <p>add validations to input </p>
        </li>
        <li>
          <p>
            implement constraints for adding in new sections of an event, so
            that no errors can be made{" "}
          </p>
        </li>
        <li>
          <p>full crud on events and their sections </p>
        </li>
        <li>
          <p>Templates for a given recuring event like "Youth Group" </p>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
