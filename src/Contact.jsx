import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state && location.state.from) {
      alert(`Navigated from ${location.state.from}`);
    }
  }, [location]);

  return (
    <>
      <button
        onClick={() => {
          navigate("/Home", { state: { from: "ContactPage" } });
        }}
      >
        HOME
      </button>
      <button
        onClick={() => {
          navigate("/AboutUs", { state: { from: "ContactPage" } });
        }}
      >
        ABOUT
      </button>
      <button
        onClick={() => {
          navigate("/Contact", { state: { from: "ContactPage" } });
        }}
      >
        CONTACT
      </button>
    </>
  );
}

export default Contact;
