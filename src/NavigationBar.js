import React from 'react'
import {Navbar, Nav, NavItem, Carousel} from 'react-bootstrap'
import {IndexLinkContainer} from 'react-router-bootstrap'

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className="navbar-wrapper">
                <div className="container">
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <IndexLinkContainer to="/">
                                    <span>TrustFact - Vertrauen für Politiker</span>
                                </IndexLinkContainer>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav className="pull-right">
                            <IndexLinkContainer eventKey={1} to="/parties">
                                <NavItem>Parteien</NavItem>
                            </IndexLinkContainer>
                            <IndexLinkContainer eventKey={2} to="#">
                                <NavItem>Politiker</NavItem>
                            </IndexLinkContainer>
                            <IndexLinkContainer eventKey={3} to="#">
                                <NavItem>Behauptungen</NavItem>
                            </IndexLinkContainer>
                            <IndexLinkContainer eventKey={4} to="#">
                                <NavItem>Über uns</NavItem>
                            </IndexLinkContainer>
                            <IndexLinkContainer eventKey={5} to="#">
                                <NavItem>Kontakt</NavItem>
                            </IndexLinkContainer>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        )
    }
}
