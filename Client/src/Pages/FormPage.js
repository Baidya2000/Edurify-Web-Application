import Header from "../Components/Common/Header";
import Name from "../Components/Common/Name";
import ContactInformation from "../Components/Common/ContactInformation";
import SendViaEmail from "../Components/Common/SendViaEmail";
import UntitledQuestion from "../Components/Common/UntitledQuestion";


function FormPage() {
    return (
      <div>
        <Header/>
        <Name/>
        <ContactInformation/>
        <SendViaEmail/>
        <UntitledQuestion/>
      </div>
    );
  }
  export default FormPage;