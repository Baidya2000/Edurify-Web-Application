import React, { useState } from "react";

const SendViaEmail = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace this with your actual email sending logic
    const response = await fetch("https://api.example.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject, message }),
    });

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email. Please try again.");
    }

    setIsSending(false);
  };

  return (
    <div>
      <h3>Send Via Email</h3>
      <form onSubmit={handleSendEmail}>
        <div>
          <label htmlFor="email">To:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" value={subject} onChange={handleSubjectChange} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={handleMessageChange} required />
        </div>
        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default SendViaEmail;