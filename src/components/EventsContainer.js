import React, { Component } from 'react'
import EventsList from "./EventsList"
import EventsForm from "./EventsForm"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class EventsContainer extends Component {


    render() {
        return (
            <div>
                <Container fluid>
                    <Row justify-content-center="true">
                        <Col><EventsList /></Col>
                    </Row>
                    <Row>
                        <Col><EventsForm /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default EventsContainer
