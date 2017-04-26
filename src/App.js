import React from 'react'
import ReactDOM from 'react-dom'
import {Navbar, Nav, NavItem, Carousel} from 'react-bootstrap'

import DataTable from './DataTable'
import StatementRow from './StatementRow'
import PoliticianRow from './PoliticianRow'
import PartyRow from './PartyRow'
import Footer from './Footer'

const apiUrls = {
    development: 'https://trustfact.dilab.co/api/v2',
    production: 'http://localhost:3100'
}
const apiUrl = apiUrls[process.env.NODE_ENV || 'development']

function loadScript(url) {
    const script = document.createElement('script')
    script.async = true
    script.href = url
    document.getElementsByTagName('body')[0].appendChild(script)
}

ReactDOM.render(
    <div>
        <div className="navbar-wrapper">
            <div className="container">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">TrustFact - Vertrauen für Politiker</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav className="pull-right">
                        <NavItem eventKey={1} href="#">Parteien</NavItem>
                        <NavItem eventKey={2} href="#">Politiker</NavItem>
                        <NavItem eventKey={3} href="#">Behauptungen</NavItem>
                        <NavItem eventKey={4} href="#">Über uns</NavItem>
                        <NavItem eventKey={5} href="#">Kontakt</NavItem>
                    </Nav>
                </Navbar>
            </div>
        </div>

        <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="Behauptungen prüfen" src={require('file-loader!./img/goats.jpg')} />
                <Carousel.Caption>
                    <h2>Stimmt das{'?'}</h2>
                    <p>In politischen Gesprächen hört man Behauptungen,<br/>
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
                        Wir verfolgen die Aussagen und die tatsächliche Umsetzung.</p>
                    <p><a className="btn btn-lg btn-primary" href="apply" role="button">Liste der Politiker</a></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>



        <DataTable title="Aussagen" data={apiUrl + "/statements"}>
            <StatementRow />
        </DataTable>
        <DataTable title="Politiker" data={apiUrl + "/politicians"}>
            <PoliticianRow />
        </DataTable>
        <DataTable title="Parteien" data={apiUrl + "/parties"}>
            <PartyRow />
        </DataTable>

        <Footer />
    </div>,
    document.getElementById('root')
)
