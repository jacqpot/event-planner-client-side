import React, { Component } from 'react'
import EventsList from "./EventsList"
import EventsForm from "./EventsForm"


export class EventsContainer extends Component {


    render() {
        return (
            <div>
                <EventsList />
                <EventsForm />
            </div>
        )
    }
}

export default EventsContainer
