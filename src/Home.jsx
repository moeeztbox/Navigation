import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
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
          navigate("/Home", { state: { from: "HomePage" } });
        }}
      >
        HOME
      </button>
      <button
        onClick={() => {
          navigate("/AboutUs", { state: { from: "HomePage" } });
        }}
      >
        ABOUT
      </button>
      <button
        onClick={() => {
          navigate("/Contact", { state: { from: "HomePage" } });
        }}
      >
        CONTACT
      </button>
    </>
  );
}

export default Home;
