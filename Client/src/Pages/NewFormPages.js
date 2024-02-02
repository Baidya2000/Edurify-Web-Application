import FormNavBar from "../Components/Navbar/FormNavbar";
import Header from "../Components/Common/Header";
import ContactInformation from "../Components/Common/ContactInformation";
import UntitledQuestion from "../Components/Common/UntitledQuestion";
import { Container } from "react-bootstrap";

function NewformPage() {
  return (
    <>
      <FormNavBar />
      <Header />
      <Container>
      <ContactInformation />
      <UntitledQuestion />
      </Container>
    </>
  );
}

export default NewformPage;
