import FormNavBar from "../Components/Navbar/FormNavbar";
import Header from "../Components/Common/Header";
import ContactInformation from "../Components/Common/ContactInformation";
import Name from "../Components/Common/Name";
import UntitledQuestion from "../Components/Common/UntitledQuestion";
import { Container } from "react-bootstrap";

function NewformUpdatePage() {
    return (
      <>
        <Container style={{ width: '1124px' }}>
        <FormNavBar />
        <Header />
        <ContactInformation />
        <Name/>
        <UntitledQuestion />
        </Container>
      </>
    );
  }
  
  export default (NewformUpdatePage);