import React, { Component } from 'react';
import './Navigation.css';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown  } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
        <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand >
            <a href="/">My Travel Site</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={2} href="#">Stuff</NavItem>
          <NavItem eventKey={2} href="#">Contact</NavItem>
        </Nav>
      </Navbar>

    );
  }
}

export default Navigation;