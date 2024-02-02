import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const HomeNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Easyform</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#products">Products</Nav.Link>
        <Nav.Link href="#templates">Templates</Nav.Link>
        <Nav.Link href="#integrations">Integrations</Nav.Link>
        <Nav.Link href="#resources">Resources</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#support">Support</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#login">Log In</Nav.Link>
        <Nav.Link href="#signup">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default HomeNavbar;