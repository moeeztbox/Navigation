import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.from === "home") {
      alert("Navigated from Home Page");
    } else if (location.state?.from === "about") {
      alert("Navigated from About Page");
    } else if (location.state?.from === "contact") {
      alert("You are already on Contact Page");
    }
  });
  const GoToHome = () => {
    navigate("/Home", { state: { from: "contact" } });
  };
  const GoToAbout = () => {
    navigate("/AboutUs", { state: { from: "contact" } });
  };
  const GoToContact = () => {
    navigate("/Contact", { state: { from: "Contact" } });
  };

  return (
    <>
      <h1>I AM CONTACT PAGE</h1>

      <button onClick={GoToHome}>HOME</button>
      <button onClick={GoToAbout}>ABOUT</button>
      <button onClick={GoToContact}>CONTACT</button>
    </>
  );
}
export default Contact;
