import React from 'react'

export default class Footer extends React.Component {
    render() {
        let parlamentChLink = 'http://www.parlament.ch'
        return (
            <footer>
                <div className="pull-left">
                    <p><a href="#"></a></p>
                    <p><a href="imprint">Datenschutz</a> · <a href="imprint">Impressum</a></p>
                </div>
                <ul className="attribution pull-right">
                    <li>Die meisten Bilder stammen von <a href="https://pixabay.com/">Pixabay</a>.</li>
                    <li>Bild des Parlaments im Carousel: By Qualle (Own work) <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA-3.0</a>,
                        via <a href="https://de.wikipedia.org/wiki/Datei:Bonn_Bundestag_Plenarsaal1.jpg">Wikimedia Commons</a>
                    </li>
                    <li>Symbolbild einer Sitzverteilung im Parlament:
                        <a href="{parlamentChLink}">{parlamentChLink}</a>,
                        via <a href="https://commons.wikimedia.org/wiki/File%3ABundesversammlung_Sitzplan_Parteien.svg">Wikimedia Commons</a>
                    </li>
                </ul>
            </footer>
        )
    }
}
