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
        <Button className="btn btn-success rounded-2">Save</Button>
      </Container>
    </>
  );
}

export default NewformPage;
