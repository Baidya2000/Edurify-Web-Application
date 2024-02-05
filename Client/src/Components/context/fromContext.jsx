import React, { createContext, useContext, useState, useEffect } from "react";

// Define the context
const FromContext = createContext();

// Define the context provider
export const FormContextProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    colour: "",
    border: "",
    questions: [],
  });

  // Question format - use objects to store questions
  // 1 Q type
  // 2 Q Text
  // 3 Q input field type

  return (
    <FromContext.Provider value={{ form, setForm }}>
      {children}
    </FromContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useFormContext = () => useContext(FromContext);
