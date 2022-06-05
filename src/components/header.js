import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function header() {
    return (
        <div className="header-section">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className="logo" href="#home">Bunsamosa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link className="links" href="#home">Discord</Nav.Link>
                            <Nav.Link className="links" href="#link">Bunsamosa?</Nav.Link>
                            <Nav.Link className="links" href="#link">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
