import { Container, Button } from "react-bootstrap";

import { useFormContext } from "../context/fromContext";

import FormNavBar from "../../Components/Navbar/FormNavbar";
import Header from "../../Components/Common/Header";
import ContactInformation from "../NewForm/ContactInformation";
import UntitledQuestion from "../NewForm/UntitledQuestion";
import AddedQuestions from "./AddedQuestions";
import SendViaEmail from "../NewForm/SendViaEmail";
import { useEffect } from "react";

function Newform() {
  const { form } = useFormContext();

  useEffect(() => {}, [form.questions]);

  return (
    <>
      <FormNavBar />
      <Container style={{ width: "1124px" }} className="pb-5">
        <Header />
        <ContactInformation />
        {form.questions.map((item, index) => {
          return (
            <AddedQuestions
              question={item.question}
              inputType={item.inputType}
              index={index}
            />
          );
        })}
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
