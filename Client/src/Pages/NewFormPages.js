import FormNavBar from "../Components/Navbar/FormNavbar";
import Header from "../Components/Common/Header";
import ContactInformation from "../Components/Common/ContactInformation";
import UntitledQuestion from "../Components/Common/UntitledQuestion";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

function NewformPage() {
  return (
    <>
      <Container style={{ width: "1124px" }} className="pb-5">
        <FormNavBar />
        <Header />
        <ContactInformation />
        <UntitledQuestion />
        <Button className="btn rounded-2 px-5"style={{ backgroundColor : "#00D78B" }}>Send</Button>
      </Container>
    </>
  );
}

export default NewformPage;
