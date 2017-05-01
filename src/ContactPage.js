import React from 'react'
import {Row, Col, Form, FormGroup, FormControl, Checkbox, Button} from 'react-bootstrap'
import 'whatwg-fetch'

export default class ContactPage extends React.Component {
    componentWillMount() {
        this.applyTo = new Set()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        let obj={
            firstName: e.target.elements['first-name'].value,
            lastName: e.target.elements['last-name'].value,
            email: e.target.elements['email'].value,
            info: e.target.elements.info.value
        }
        fetch('http://localhost:3100/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(data => alert('Danke für die Kontaktaufnahme! Wir melden uns schnellstmöglich!'))
            .catch(data => alert('Ein Fehler ist aufgetreten: ' + data))
    }

    render() {
        return <div className="container">
            <h2>Kontakt aufnehmen</h2>
            <p>Da wir das Projekt bisher in unserer Freizeit aufbauen, sind wir am besten über dieses Kontaktformular zu erreichen.</p>
            <p>Einfach hier Name und E-Mail-Adresse hinterlassen, wir nehmen dann gern Kontakt auf und besprechen alles weitere.</p>

            <Row>
                <Col md={6} mdOffset={3}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="first-name">
                            <FormControl type="text" placeholder="Vorname" />
                        </FormGroup>
                        <FormGroup controlId="last-name">
                            <FormControl type="text" placeholder="Nachname" />
                        </FormGroup>
                        <FormGroup controlId="email">
                            <FormControl type="email" placeholder="E-Mail-Adresse" />
                        </FormGroup>
                        <FormGroup controlId="info">
                            <FormControl type="text" componentClass="textarea" placeholder="Deine Nachricht für uns" />
                        </FormGroup>

                        <Button type="submit" bsStyle="primary" className="pull-right">Absenden</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    }
}
