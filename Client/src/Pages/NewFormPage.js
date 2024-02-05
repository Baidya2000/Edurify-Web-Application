import Newform from "../Components/NewForm/NewForm";

import { FormContextProvider } from "../Components/context/fromContext";

function NewformPage() {
  return (
    <>
      <FormContextProvider>
        <Newform />
      </FormContextProvider>
    </>
  );
}

export default NewformPage;
