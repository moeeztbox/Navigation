import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function About() {
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
          navigate("/Home", { state: { from: "AboutPage" } });
        }}
      >
        HOME
      </button>
      <button
        onClick={() => {
          navigate("/AboutUs", { state: { from: "AboutPage" } });
        }}
      >
        ABOUT
      </button>
      <button
        onClick={() => {
          navigate("/Contact", { state: { from: "AboutPage" } });
        }}
      >
        CONTACT
      </button>
    </>
  );
}

export default About;
