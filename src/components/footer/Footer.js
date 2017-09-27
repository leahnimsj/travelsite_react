import React, { Component } from 'react';
import './Footer.css';
import { Nav, Navbar, Jumbotron, Button, NavItem, MenuItem, NavDropdown  } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
        <Navbar className="navbar-inverse">
            <Navbar.Header>
                <Navbar.Brand >
                <a href="#">&copy; Travel is fun</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="www.facebook.com">Facebook</NavItem>
                <NavItem eventKey={2} href="www.twitter.com">Twitter</NavItem>
            </Nav>
      </Navbar>

    );
  }
}

export default Footer;