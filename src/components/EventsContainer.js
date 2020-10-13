// houses data and methods.

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchEvents } from '../actions/eventsActions'
import EventsForm from './EventsForm'
import EventsList from './EventsList'


export class EventsContainer extends Component {

    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        return (
            <div>
                
                <EventsForm />
            </div>
        )
    }
}

export default connect(null, { fetchEvents })(EventsContainer);
