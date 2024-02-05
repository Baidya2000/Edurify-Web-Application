import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import SignupPage from "../Pages/SignupPage";
import LoginPage from "../Pages/LoginPage";
import NewformPage from "../Pages/NewFormPage";
import DasboradPage from "../Pages/DasboradPage";
import ContactResponsePage from "../Pages/ContactResponsePage";
import HomePage from "../Pages/HomePage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Dashboard" element={<DasboradPage />} />
        <Route path="/new-form" element={<NewformPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-response" element={<ContactResponsePage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
