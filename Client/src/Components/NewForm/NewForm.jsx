import FormNavBar from "../../Components/Navbar/FormNavbar";
import Header from "../../Components/Common/Header";
import ContactInformation from "../NewForm/ContactInformation";
import UntitledQuestion from "../NewForm/UntitledQuestion";
import SendViaEmail from "../NewForm/SendViaEmail";
import { Container, Button } from "react-bootstrap";

function Newform() {
  return (
    <>
      <FormNavBar />
      <Container style={{ width: "1124px" }} className="pb-5">
        <Header />
        <ContactInformation />
        <UntitledQuestion />
        <Button
          className="btn rounded-2 px-5"
          style={{ backgroundColor: "#00D78B" }}
        >
          Save
        </Button>
      </Container>
    </>
  );
}

export default Newform;
