import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from './DatePicker'
import { addEvent } from '../actions/eventsActions'
class EventsForm extends Component {

    state = {
        title: '',
        description: '',
        date: 0,
        start: 0,
        finish: 0
    }

    handleChange = e => {
        const { name, value } = e.target 

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addEvent(this.state)
    }

    render() {
        return (
         <form onSubmit={this.handleSubmit}>
             <h3>New Event Form</h3>
             
             <br/>
             <label>Title:</label>
             <input type="text" value={this.state.title} onChange={this.handleChange} name='title'/>
            <br/>
             <label>Description:</label>
             <input type="text" value={this.state.description} onChange={this.handleChange} name='description'/>
             <br/>
             <label>Date:</label>
             <input type="date" value={this.state.date} onChange={this.handleChange} name='date'/>
             <br/>
             <label>Start time:</label>
             <input type="time" value={this.state.start} onChange={this.handleChange} name='start'/>
             <br/>
             <label>finish time:</label>
             <input type="time" value={this.state.finish} onChange={this.handleChange} name='finish'/>
                <br/>
            <input type="submit" value="Create Event" />
         </form>
        )
    }
}

export default connect(null, {addEvent})(EventsForm);