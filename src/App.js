import React from 'react'
import ReactDOM from 'react-dom'
import {Carousel} from 'react-bootstrap'

import goat from './img/goats.jpg'
import Marketing from './Marketing'

import DataTable from './DataTable'
import StatementRow from './StatementRow'
import PoliticianRow from './PoliticianRow'

export default class App extends React.Component {
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
                                <button type="submit" className="btn btn-primary" role="button">Nachschlagen</button>
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
                                <a className="btn btn-lg btn-primary" href="apply" role="button">Liste der Politiker</a>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Marketing />

                <DataTable title="Aussagen" data={this.props.apiUrl + "/statements"}>
                    <StatementRow />
                </DataTable>
                <DataTable title="Politiker" data={this.props.apiUrl + "/politicians"}>
                    <PoliticianRow />
                </DataTable>
            </div>
        )
    }
}
