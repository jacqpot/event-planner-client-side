import React, { Component } from 'react'
import EventsList from "./EventsList"
import EventsForm from "./EventsForm"
import Grid from '@material-ui/core/Grid';
import "./App.css"

export class EventsContainer extends Component {


    render() {
        return (
            <Grid container spacing={1} direction="row" justify="space-around" alignItems="center">
                <Grid>
                    <EventsList />
                </Grid>
                <Grid>
                    <EventsForm />

                </Grid>
            </Grid>
        )
    }
}

export default EventsContainer
