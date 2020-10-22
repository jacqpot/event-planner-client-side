import { Container } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";

const Home = () => {
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
        <Container
          fixed
          maxWidth="sm"
          style={{ backgroundColor: "#cfe8fc", height: "40vh" }}
        >
          <h1 className="home">Event Planning</h1>
          <p>
            This App was developed too help lay-peoples plan church events. With
            a simple, easy to follow process. This was done with my Youth group
            in mind. There are several things that can be implemented to level
            up this application. see the list below for more information.
          </p>
          <p>
            click on events in the Nav bar to get started. You will see a few
            events already present in order too model functionality.
          </p>
          <ul>
            <li>
              <p>include search functionality</p>
            </li>
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
      </Grid>
    </Grid>
  );
};

export default Home;
