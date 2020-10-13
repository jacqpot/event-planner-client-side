export const fetchEvents = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/events')
        .then(resp => resp.json())
        .then(events => dispatch({ type: 'FETCH_EVENTS', payload: events}))
    }
}

export const addEvent = ev => {
    return dispatch => {

        fetch('http://localhost:3001/events', {
            method: 'POST',
            body: JSON.stringify(ev),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(ev => dispatch({ type: 'ADD_EVENT', payload: ev}))
        
    }
}

