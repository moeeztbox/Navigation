import React from "react";
import { useState, useEffect } from "react";

function FormOutput() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const storedFeedback = JSON.parse(localStorage.getItem(name));

    if (storedFeedback) {
      setFeedback(storedFeedback);
    }
  }, []);

  if (!feedback || feedback.length === 0) {
    return <p style={{ color: "blue", fontSize: "25px" }}>No feedback yet</p>;
  }
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <h2>Submitted Feedback:</h2>
        <ul>
          {feedback.map((item) => (
            <li key={item.id}>
              <strong>Name:</strong> {item.data.FirstName} {item.data.LastName}{" "}
              <br />
              <strong>Email:</strong> {item.data.Email} <br />
              <strong>Bio:</strong> {item.data.Bio} <br />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FormOutput;
