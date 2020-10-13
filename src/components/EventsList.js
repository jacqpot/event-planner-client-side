import React from 'react'
import { connect } from 'react-redux'

const EventsList = ({ events }) => {
        return (
            <div>
                {events.map(ev => <ul> <li key={ev.id}>{ev.title} - {ev.description} - {ev.date} - {ev.start} - {ev.finish}</li> </ul> )}
            </div>
        )
}

const mapStateToProps = state => {
    return { events: state.events}
}

export default connect(mapStateToProps)(EventsList);
