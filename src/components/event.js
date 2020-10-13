import React, { Component } from 'react'

const event = ({ ev }) => {
        return (
            <div>
                <li key={ev.id}>
                    <h2>{ev.title}</h2>
                      {ev.description} - {ev.date} - {ev.start} - {ev.finish}</li>
            </div>
        )
    
}

export default event
