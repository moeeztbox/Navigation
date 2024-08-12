import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function About() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.from === "home") {
      alert("Navigated from Home Page");
    } else if (location.state?.from === "about") {
      alert("You are already on About Page");
    } else if (location.state?.from === "contact") {
      alert("Navigated from Contact Page");
    }
  });
  const GoToHome = () => {
    navigate("/Home", { state: { from: "about" } });
  };
  const GoToAbout = () => {
    navigate("/AboutUs", { state: { from: "about" } });
  };
  const GoToContact = () => {
    navigate("/Contact", { state: { from: "about" } });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={GoToHome}
      >
        HOME
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={GoToAbout}
      >
        ABOUT
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={GoToContact}
      >
        CONTACT
      </button>

      <h1 style={{ color: "blue", marginTop: "15px" }}>I AM ABOUT PAGE</h1>
    </>
  );
}
export default About;
