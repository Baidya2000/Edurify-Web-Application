import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../../Assets/EasyformLogo.png';


const HomeNavbar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Image style={{ width: "166px" }}
        className="float-start ms-2" src={logo}></Image>
      <Nav className="ml-auto d-flex">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#products">Products</Nav.Link>
        <Nav.Link href="#templates">Templates</Nav.Link>
        <Nav.Link href="#integrations">Integrations</Nav.Link>
        <Nav.Link href="#resources">Resources</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#support">Support</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/Login">Log In</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default HomeNavbar;