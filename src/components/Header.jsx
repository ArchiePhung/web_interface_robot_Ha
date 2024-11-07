import React, { Component } from "react";
import {Navbar, Nav, Container} from "react-bootstrap"
import Connection from "./Connection";

class Header extends Component {
    render() {
        return (
            <Container>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <Navbar.Brand href="#home">HCMUTE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/map">Map</Nav.Link>
                                <Nav.Link href="/history">History</Nav.Link>
                                {/* <Nav.Link href="/login">Login</Nav.Link> */}
                            </Nav>

                        </Navbar.Collapse>

                        {/* Component displayed at the end of the Navbar */}
                        <div className="d-flex align-items-center">
                            <Connection />
                        </div>

                    </Container>
                </Navbar>
            </Container>
        );
    }
}

export default Header;