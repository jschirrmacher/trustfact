import React from 'react'
import {Carousel, Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import goat from './img/goats.jpg'

export default class StartPage extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="Behauptungen prüfen" src={goat} />
                        <Carousel.Caption>
                            <h2>Stimmt das{'?'}</h2>
                            <p>In politischen Gesprächen hört man Behauptungen,
                                <br/>
                                von denen man sich nicht sicher ist, ob sie stimmen.</p>
                            <p>Hier kannst du sie prüfen:</p>
                            <form className="form-inline" action="apply">
                                <div className="form-group">
                                    <input type="text" name="text" className="form-control" placeholder="Behauptung eingeben" />
                                </div>
                                <LinkContainer to="/apply">
                                    <Button bsSize="large" bsStyle="primary">Nachschlagen</Button>
                                </LinkContainer>
                            </form>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="Politiker prüfen"
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Bonn_Bundestag_Plenarsaal1.jpg"/>
                        <Carousel.Caption>
                            <h2>Politiker-Aussagen</h2>
                            <p>Wer sagt was{'?'} Und wird das dann auch so umgesetzt{'?'}<br />
                                Wir verfolgen die Aussagen und die tatsächliche Umsetzung.
                            </p>
                            <p>
                                <LinkContainer to="/politicians">
                                    <Button bsSize="large" bsStyle="primary">Liste der Politiker</Button>
                                </LinkContainer>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="container marketing">
                    <Row>
                        <Col lg={4}>
                            <img className="img-circle" src="/img/Zeitung.jpg" alt="Zeitung als Symbolbild für Behauptungen / Aussagen" width="140" height="140" />
                            <h2>Behauptungen</h2>
                            <p>Was wird behauptet, was kann belegt werden und wie{'?'} Diese Fragen wollen wir hier beantworten.</p>
                            <p>
                                <LinkContainer to="/statements">
                                    <Button bsStyle="default">Zu den Behauptungen »</Button>
                                </LinkContainer>
                            </p>
                        </Col>

                        <Col lg={4}>
                            <img className="img-circle" src="/img/AngelaMerkel.jpg" alt="Symbolbild Politiker" width="140" height="140" />

                            <h2>Politiker</h2>

                            <p>Politiker stellen Behauptungen auf, die fundiert sind oder auch nicht.
                                Wir machen transparent, was in welchem Kontext stimmt und was nicht.</p>

                            <p>
                                <LinkContainer to="/politicians">
                                    <Button bsStyle="default">Zu den Politikern »</Button>
                                </LinkContainer>
                            </p>
                        </Col>

                        <Col lg={4}>
                            <img className="img-circle" src="/img/Sitzverteilung.png" alt="Sitzverteilung als Symbolbild für Parteien - Bild von Wikimedia, siehe Hinweis im Seitenfuß" width="140" height="140" />

                            <h2>Parteien</h2>

                            <p>Parteien setzen nicht immer um, was im Programm steht.
                                Wir machen sichtbar, was gemacht und was nur behauptet wird.</p>

                            <p>
                                <LinkContainer to="/parties">
                                    <Button bsStyle="default">Zu den Parteien »</Button>
                                </LinkContainer>
                            </p>
                        </Col>
                    </Row>

                    <hr className="featurette-divider" />

                    <Row className="featurette">
                        <Col md={7}>
                            <h2 className="featurette-heading">Warum machen wir das{'?'}</h2>
                            <p className="lead">Menschen suchen nach einfachen Antworten. Die Welt ist aber nicht so einfach.
                                Wir wollen die richtigen von den falschen Informationen unterscheiden.
                                Und Populisten von den Politikern, denen wir wirklich vertrauen können.</p>
                            <LinkContainer to="/apply">
                                <Button bsStyle="primary" className="pull-right">Mehr erfahren</Button>
                            </LinkContainer>
                        </Col>
                        <Col md={5}>
                            <img className="featurette-image img-responsive center-block" alt="" src="/img/FragenUndAntworten.jpg" />
                        </Col>
                    </Row>

                    <Row className="featurette">
                        <Col md={5}>
                            <img className="featurette-image img-responsive center-block" alt="" src="/img/Zusammenarbeit.jpg" />
                        </Col>
                        <Col md={7}>
                            <h2 className="featurette-heading">Wie machen wir das{'?'}</h2>
                            <p className="lead">Dieses System lebt von der Mitarbeit vieler interessierter Menschen,
                                die unsere Demokratie stärken und dem sogenannten "Post-Faktischen" entgegen wirken wollen.
                            </p>
                            <LinkContainer to="/apply">
                                <Button bsStyle="primary" className="pull-right">Mehr erfahren</Button>
                            </LinkContainer>
                        </Col>
                    </Row>

                    <Row className="featurette">
                        <Col md={7}>
                            <h2 className="featurette-heading">Wie kann ich mitmachen{'?'}</h2>
                            <p className="lead">Interessiert, mitzumachen{'?'} Sehr gern!
                                Egal wie viel Zeit zur Verfügung steht - wir haben auf jeden Fall die richtigen Aufgaben.
                            </p>
                            <LinkContainer to="/apply">
                                <Button bsStyle="primary" className="pull-right">Mehr erfahren</Button>
                            </LinkContainer>
                        </Col>
                        <Col md={5}>
                            <img className="featurette-image img-responsive center-block" alt="" src="/img/volunteer.jpg" />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
