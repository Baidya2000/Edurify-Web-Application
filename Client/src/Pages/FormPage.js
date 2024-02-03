import Header from "../Components/Common/Header";
import Name from "../Components/Common/Name";
import ContactInformation from "../Components/Common/ContactInformation";
import SendViaEmail from "../Components/Common/SendViaEmail";
import UntitledQuestion from "../Components/Common/UntitledQuestion";
import { Container } from "react-bootstrap";


function FormPage() {
    return (
      <Container style={{ width: '1124px' }}>
      <div>
        <Header/>
        <ContactInformation/>
        <Name/>
        <UntitledQuestion/>
        <SendViaEmail/>
      </div>
      </Container>
    );
  }
  export default FormPage;