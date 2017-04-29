import React from 'react'
import {Navbar, Nav, NavItem, Carousel} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

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
                            <LinkContainer eventKey={1} to="/parties">
                                <NavItem>Parteien</NavItem>
                            </LinkContainer>
                            <LinkContainer eventKey={2} to="/politicians">
                                <NavItem>Politiker</NavItem>
                            </LinkContainer>
                            <LinkContainer eventKey={3} to="/statements">
                                <NavItem>Behauptungen</NavItem>
                            </LinkContainer>
                            <LinkContainer eventKey={4} to="/about">
                                <NavItem>Über uns</NavItem>
                            </LinkContainer>
                            <LinkContainer eventKey={5} to="/contact">
                                <NavItem>Kontakt</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        )
    }
}
