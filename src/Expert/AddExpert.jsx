import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ExpertContext } from "./ExpertContext";

function AddExpert() {
  const { addExpert } = useContext(ExpertContext);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    Name: "",
    TaskTitle: "",
    Status: "",
  });

  const HandleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleTimeString();
    const expertWithTime = {
      ...data,
      Time: currentTime,
    };
    addExpert(expertWithTime);
    localStorage.setItem(data.Name, JSON.stringify(expertWithTime));
    navigate("/");
    console.log(data);
  };

  return (
    <div>
      <div className="container bg-light">
        <form onSubmit={HandleSubmit}>
          <h1>Add expert</h1>
          <div
            className="box"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="Name">Name</label>
            <input
              onChange={HandleChange}
              className="input mt-2 mb-3"
              type="text"
              name="Name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="Task Title">Task Title</label>
            <input
              onChange={HandleChange}
              className="input"
              type="text"
              name="TaskTitle"
              placeholder="Enter your task title"
              required
            />
            <label htmlFor="Status">Status</label>
            <input
              onChange={HandleChange}
              className="input mb-3 "
              type="text"
              name="Status"
              placeholder="Enter your status"
              required
            />
            <button className="btn btn2 mb-4 mt-2" type="Submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpert;
