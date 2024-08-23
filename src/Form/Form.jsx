import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState([]);
  const [data, setdata] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Bio: "",
  });

  const HandleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const name = localStorage.getItem("name");
    const newFeedBack = {
      data,
      id: uuidv4(),
    };
    setFeedback([...feedback, newFeedBack]);
    console.log(feedback);
    localStorage.setItem(name, JSON.stringify(feedback));
    // navigate("/Profile");
    // setdata({
    //   FirstName: "",
    //   LastName: "",
    //   Email: "",
    //   Bio: "",
    // });
  };

  return (
    <div>
      <div className="container bg-light">
        <form onSubmit={HandleSubmit}>
          <h1>Edit expert details</h1>
          <div
            className="box"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="First name">First name</label>
            <input
              onChange={HandleChange}
              className="input mt-2 mb-3"
              type="text"
              name="FirstName"
              placeholder="First"
            />

            <label htmlFor="Last name">Last name</label>
            <input
              onChange={HandleChange}
              className="input"
              type="text"
              name="LastName"
              placeholder="Last"
            />
            <label htmlFor="Email">
              Email<span className="redspan">*</span>
            </label>
            <input
              onChange={HandleChange}
              className="input mb-3 "
              type="text"
              name="Email"
              placeholder="john.doe@example.com"
            />
            <label htmlFor="Bio">
              Bio<span className="redspan">*</span>
            </label>
            <textarea
              onChange={HandleChange}
              style={{
                backgroundColor: "white",
                color: "black",
                marginTop: "8px",
                marginBottom: "12px",
              }}
              rows="1"
              name="Bio"
              placeholder="Enter Bio"
            />
            <button className="btn btn2 mb-4 mt-2" type="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
