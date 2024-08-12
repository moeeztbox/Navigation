import React from "react";
import { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
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
    })
    const GoToHome = () => {
      navigate("/Home", { state: { from: "about" } })
    };
    const GoToAbout = () => {
      navigate("/AboutUs", { state: { from: "about" } });
    };
    const GoToContact = () => {
      navigate("/Contact", { state: { from: "about" } })
    };


  return (
    <>
    <button onClick={GoToHome}>HOME</button>
    <button onClick={GoToAbout}>ABOUT</button>
    <button onClick={GoToContact}>CONTACT</button>

      <h1>I AM ABOUT PAGE</h1>
    </>
  );
}
export default About