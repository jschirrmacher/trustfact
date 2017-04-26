import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default class Marketing extends React.Component {
    render() {
        return (
            <div className="container marketing">
                <Row>
                    <Col lg={4}>
                        <img className="img-circle" src="/img/Zeitung.jpg" alt="Zeitung als Symbolbild für Behauptungen / Aussagen" width="140" height="140" />
                        <h2>Behauptungen</h2>
                        <p>Was wird behauptet, was kann belegt werden und wie{'?'} Diese Fragen wollen wir hier beantworten.</p>
                        <p><a className="btn btn-default" href="apply" role="button">Zu den Behauptungen »</a></p>
                    </Col>

                    <Col lg={4}>
                        <img className="img-circle" src="/img/AngelaMerkel.jpg" alt="Symbolbild Politiker" width="140" height="140" />

                        <h2>Politiker</h2>

                        <p>Politiker stellen Behauptungen auf, die fundiert sind oder auch nicht.
                            Wir machen transparent, was in welchem Kontext stimmt und was nicht.</p>

                        <p><a className="btn btn-default" href="apply" role="button">Zu den Politikern »</a></p>
                    </Col>

                    <Col lg={4}>
                        <img className="img-circle" src="/img/Sitzverteilung.png" alt="Sitzverteilung als Symbolbild für Parteien - Bild von Wikimedia, siehe Hinweis im Seitenfuß" width="140" height="140" />

                        <h2>Parteien</h2>

                        <p>Parteien setzen nicht immer um, was im Programm steht.
                            Wir machen sichtbar, was gemacht und was nur behauptet wird.</p>

                        <p><a className="btn btn-default" href="apply" role="button">Zu den Parteien »</a></p>
                    </Col>
                </Row>

                <hr className="featurette-divider" />

                <Row className="featurette">
                    <Col md={7}>
                        <h2 className="featurette-heading">Warum machen wir das{'?'}</h2>
                        <p className="lead">Menschen suchen nach einfachen Antworten. Die Welt ist aber nicht so einfach.
                            Wir wollen die richtigen von den falschen Informationen unterscheiden.
                            Und Populisten von den Politikern, denen wir wirklich vertrauen können.</p>
                        <a href="apply" className="btn btn-primary pull-right">Mehr erfahren</a>
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
                        <a href="apply" className="btn btn-primary pull-right">Mehr erfahren</a>
                    </Col>
                </Row>

                <Row className="featurette">
                    <Col md={7}>
                        <h2 className="featurette-heading">Wie kann ich mitmachen{'?'}</h2>
                        <p className="lead">Interessiert, mitzumachen{'?'} Sehr gern!
                            Egal wie viel Zeit zur Verfügung steht - wir haben auf jeden Fall die richtigen Aufgaben.
                        </p>
                        <a href="apply" className="btn btn-primary pull-right">Mehr erfahren</a>
                    </Col>
                    <Col md={5}>
                        <img className="featurette-image img-responsive center-block" alt="" src="/img/volunteer.jpg" />
                    </Col>
                </Row>
            </div>
        )
    }
}
