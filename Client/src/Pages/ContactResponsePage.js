import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FormNavbar from "../Components/Navbar/FormNavbar";
import Header from "../Components/Common/Header";
import ContactResponse from "../Components/ContactResponse/ContactResponse";

function ContactResponsePage() {
  return (
    <div>
      <FormNavbar />
      <Container style={{ width: '1124px' }}>
        <Header/>
        <ContactResponse/>
      </Container>
    </div>
  );
}
export default ContactResponsePage;
