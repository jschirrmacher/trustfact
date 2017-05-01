import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="container">
                <img className="img-responsive pull-right" alt="Joachim Schirrmacher" src="/img/team/Joachim-Schirrmacher.jpg"/>
                <h2>Joachim Schirrmacher</h2>
                <p>
                    Eine Begegnung mit Freunden brachte mich auf den Gedanken, etwas tun zu müssen. Als wir über
                    das Thema Flüchtlinge sprachen, war mir klar, dass die Behauptungen, die ich hörte, nicht stimmen
                    konnten. Ohne stichhaltige Belege fühlte ich mich mit meinen Gegenargumenten zu schwach.
                </p>
                <p>
                    Als Software-Entwickler bin ich eher rational, das Post-Faktische ist mir total fremdartig, auch
                    wenn ich jetzt immer wieder damit konfrontiert werde. Aber mit meinen Fähigkeiten kann ich dennoch
                    einen Unterschied machen. Wenn ich eine Möglichkeit schaffe, Menschen wie mir einen Rückhalt zu
                    geben, eine leicht erreichbare Hilfestellung, dann wäre das ein Unterschied.
                </p>
                <p>
                    Daher reifte die Idee einer Smartphone-App, mit der ich jederzeit eine Aussage prüfen kann,
                    Belege und Quellen finde. Das hilft mir in der Diskussion und bringt sie vom Post-Faktischen
                    in die Realität zurück.
                </p>
                <p>
                    Gut, dass es Menschen gibt, die mich dabei unterstützen.
                </p>

                <LinkContainer to="/apply" className="pull-right">
                    <Button bsSize="large" bsStyle="primary">Mitmachen</Button>
                </LinkContainer>
            </div>
        )
    }
}
