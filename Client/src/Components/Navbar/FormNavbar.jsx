import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../../Assets/EasyformLogo.png";

const FormNavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
      <Image
        src={logo}
        style={{ width: "166px" }}
        className="float-start ms-2"
      />
      <div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex justify-content-end">
            <Nav.Link href="#home">10</Nav.Link>
            <NavDropdown
              title="Request Received"
              id="request-received-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Biltu Baidya
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Biltu@gmail.com
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Biltu Baidya</Nav.Link>
            <Nav.Link href="#link">biltu@gmail.com</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default FormNavBar;
