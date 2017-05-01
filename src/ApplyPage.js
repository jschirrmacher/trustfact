import React from 'react'
import {Row, Col, Form, FormGroup, FormControl, Checkbox, Button} from 'react-bootstrap'
import 'whatwg-fetch'

export default class ApplyPage extends React.Component {
    componentWillMount() {
        this.applyTo = new Set()
        this.toggleCheckbox = this.toggleCheckbox.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleCheckbox(label) {
        label = label.target.parentNode.innerText
        if (this.applyTo.has(label)) {
            this.applyTo.delete(label);
        } else {
            this.applyTo.add(label);
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        let obj={
            firstName: e.target.elements['first-name'].value,
            lastName: e.target.elements['last-name'].value,
            email: e.target.elements['email'].value,
            applyTo: this.applyTo.toJSON().join('\n\t'),
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
            <h2>Du kannst einen Unterschied machen!</h2>
            <p>TrustFact ist noch im Aufbaustadium. Aktuell arbeiten wir an einem minimalen Prototypen,
                mit dem man nach Aussagen und den entsprechenden Informationen suchen kann. Außerdem
                sammeln wir Aussagen, Belege und Quellen.</p>

            <p>Für die Techniker unter euch: Das Ganze funktioniert mit Node.js® für den Server, express.js
                als Router, React.js für das Frontend, React Native für die App, Babel für ES6, und
                natürlich noch viel mehr.</p>

            <p>Du bist interessiert an den Inhalten{'?'} Dann mach' doch einfach mit!</p>

            <ul>
                <li>Wir suchen aktuell Mitstreiter, die Inhalte (Aussagen, Belege, Quellen) zusammentragen,
                    aber auch Menschen, die beim technischen Aufbau mitwirken wollen, an der Programmierung
                    und auch am Design.</li>
                <li>Du kannst keine Zeit erübrigen, willst das Projekt aber trotzdem fördern{'?'} Kein Problem:
                    wir freuen uns natürlich auch über eine Geldspende. TrustFact arbeitet ohne Gewinnabsicht,
                    braucht aber Spender für den Betrieb der Plattform, mittelfristig auch für die Organisation.</li>
            </ul>
            <p>In jedem Fall einfach hier Name und E-Mail-Adresse hinterlassen, wir nehmen dann gern Kontakt auf
                und besprechen alles weitere.</p>

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
                        <FormGroup controlId="apply">
                            <Checkbox inline onChange={this.toggleCheckbox}>Ich möchte Inhalte beisteuern</Checkbox>
                        </FormGroup>
                        <FormGroup controlId="apply">
                            <Checkbox inline onChange={this.toggleCheckbox}>Ich möchte bei der Technik mitmachen</Checkbox>
                        </FormGroup>
                        <FormGroup controlId="apply">
                            <Checkbox inline onChange={this.toggleCheckbox}>Ich möchte spenden</Checkbox>
                        </FormGroup>
                        <FormGroup controlId="info">
                            <FormControl type="text" componentClass="textarea" placeholder="Weitere Infos für uns" />
                        </FormGroup>

                        <Button type="submit" bsStyle="primary" className="pull-right">Absenden</Button>
                    </Form>
                </Col>
            </Row>

            <p>Du willst die Daten für ein eigenes Projekt nutzen{'?'} Schau' doch mal unser <a href={this.props.apiUrl}>API</a> an!</p>
        </div>
    }
}
