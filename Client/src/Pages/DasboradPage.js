import React, { useState } from "react";
import FormNavbar from "../Components/Navbar/FormNavbar";
import Header from "../Components/Common/Header";
import Dasborad from "../Components/Dasborad/Dasborad";
import { Container } from "react-bootstrap";

function DasboradPage() {
  return (
    <Container style={{ width: '1124px' }}>
      <FormNavbar />
      <Header />
      <Dasborad />
    </Container>
  );
}
export default DasboradPage;
