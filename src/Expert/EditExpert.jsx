import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ExpertContext } from "./ExpertContext"; // Import the context

function EditExpert() {
  const { experts, updateExpert } = useContext(ExpertContext); // Use context to get experts and update function
  const navigate = useNavigate();

  const [expertData, setExpertData] = useState({
    id: "",
    Name: "",
    TaskTitle: "",
    Status: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data")); // Retrieve data from localStorage
    if (data) {
      setExpertData(data); // Set the data to state
    }
  }, []);

  const handleChange = (e) => {
    setExpertData({ ...expertData, [e.target.name]: e.target.value }); // Update state as user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateExpert(expertData); // Update the expert in the context
    localStorage.setItem("experts", JSON.stringify(experts)); // Sync updated experts to localStorage
    navigate("/"); // Redirect back to the main page
  };

  return (
    <div className="container bg-secondary">
      <form onSubmit={handleSubmit}>
        <h1>Edit Expert</h1>
        <div
          className="box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="Name">Name</label>
          <input
            value={expertData.Name}
            onChange={handleChange}
            className="input mt-2 mb-3"
            type="text"
            name="Name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="TaskTitle">Task Title</label>
          <input
            value={expertData.TaskTitle}
            onChange={handleChange}
            className="input mt-2 mb-3"
            type="text"
            name="TaskTitle"
            placeholder="Enter your task title"
            required
          />

          <label htmlFor="Status">Status</label>
          <input
            value={expertData.Status}
            onChange={handleChange}
            className="input mt-2 mb-3"
            type="text"
            name="Status"
            placeholder="Enter your status"
            required
          />

          <label htmlFor="Status">Time</label>
          <input
            value={expertData.Time}
            onChange={handleChange}
            className="input mt-2 mb-3"
            type="text"
            name="Status"
            disabled
          />

          <button className="btn btn2 mb-4 mt-2" type="Submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditExpert;
