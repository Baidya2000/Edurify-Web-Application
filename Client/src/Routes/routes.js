import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import SignupPage from "../Pages/SignupPage";
import LoginPage from "../Pages/LoginPage";
import FormPage from "../Pages/FormPage";
import NewformPages from "../Pages/NewFormPages";
import DasboradPage from "../Pages/DasboradPage";
import NewformUpdatePage from "../Pages/NewFormUpadePage";
import NewFormConfirmpage from "../Pages/NewFormConfirmpage";
import ContactResponsePage from "../Pages/ContactResponsePage";
import HomePage from "../Pages/HomePage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/Dashboard" element={<DasboradPage />} />
        <Route path="/new-form" element={<NewformPages />} />
        <Route path="/new-Updateform" element={<NewformUpdatePage />} />
        <Route path="/Confirm-form" element={<NewFormConfirmpage />} />
        <Route path="/Home" element={<HomePage />} />
               <Route
          path="/contact-response"
          element={<ContactResponsePage />}
        />

        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
