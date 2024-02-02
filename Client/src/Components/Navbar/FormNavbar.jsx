import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../Assets/EasyformLogo.png"

const FormNavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="logo">Easyform</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-flex justify-content-end">
          <Nav.Link href="#home">10</Nav.Link>
          <NavDropdown title="Request Received" id="request-received-dropdown">
            <NavDropdown.Item href="#action/3.1">Biltu Baidya</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Biltu@gmail.com</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Biltu Baidya</Nav.Link>
          <Nav.Link href="#link">biltu@gmail.com</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FormNavBar;