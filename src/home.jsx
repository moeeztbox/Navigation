import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.from === "home") {
      alert("You are already on Home Page");
    } else if (location.state?.from === "about") {
      alert("Navigated from About Page");
    } else if (location.state?.from === "contact") {
      alert("Navigated from Contact Page");
    }
  });
  const GoToHome = () => {
    navigate("/Home", { state: { from: "home" } });
  };
  const GoToAbout = () => {
    navigate("/AboutUs", { state: { from: "home" } });
  };
  const GoToContact = () => {
    navigate("/Contact", { state: { from: "home" } });
  };

  return (
    <>
      <button
        style={{
          marginRight: "15px",
          backgroundColor: "green",
          color: "yellow",
        }}
        onClick={GoToHome}
      >
        HOME
      </button>
      <button
        style={{
          marginRight: "15px",
          backgroundColor: "green",
          color: "yellow",
        }}
        onClick={GoToAbout}
      >
        ABOUT
      </button>
      <button
        style={{
          marginRight: "15px",
          backgroundColor: "green",
          color: "yellow",
        }}
        onClick={GoToContact}
      >
        CONTACT
      </button>

      <h1 style={{ backgroundColor: "black", color: "red" }}>I AM HOME PAGE</h1>
    </>
  );
}
export default Home;
