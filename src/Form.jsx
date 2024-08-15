import React, { useState } from "react";
import "./App.css";
function Form({handleAdd}) {
  const [data, setdata] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  const HandleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    
  };


  const HandleSubmit=(e)=>{
    e.preventDefault()
    const newFeedBack={
        data,
        
    }

    handleAdd(newFeedBack)
    console.log(newFeedBack)
    setdata({FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Subject: "default",
        Message: "",})
  }

  const Reset = () => {
    setdata({
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      Subject: "default",
      Message: "",
    });
  };

  return (
    <div>
      <div className="container bg-light">
        <form onSubmit={HandleSubmit}>
            <h1>Contact Form</h1>
            <p>
              Let us know your questions, suggestions and concerns by filling out
              the <br /> contact form below.
            </p>
            <div
              className="box"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="Name">
                Name<span className="redspan">*</span>
              </label>
              <div className="box">
                <input
                  onChange={HandleChange}
                  className="input mt-2 mb-3"
                  type="text"
                  name="FirstName"
                  placeholder="First"
                />
                <input
                  onChange={HandleChange}
                  className="input"
                  type="text"
                  name="LastName"
                  placeholder="Last"
                />
              </div>
            </div>
            <div className="box" style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="box"
                style={{ display: "flex", flexDirection: "column" }}
              >
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
              </div>
              <div
                className="box"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="Phone">
                  Phone<span className="redspan">*</span>
                </label>
                <input
                  onChange={HandleChange}
                  className="input"
                  type="text"
                  name="Phone"
                  placeholder="0301 2345678"
                />
              </div>
            </div>
            <div
              className="box"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="Subject">
                Subject<span className="redspan">*</span>
              </label>
              <select
                onChange={HandleChange}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  marginTop: "8px",
                  marginBottom: "12px",
                  width: "525px",
                }}
                name="Subject"
                defaultValue="default"
              >
                <option value="default">Select Subject</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div
              className="box"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="Message">
                Message<span className="redspan">*</span>
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
                name="Message"
                placeholder="Tell us how we can help you"
              />
            </div>
            <button onClick={Reset} className="btn mb-4 mt-2" type="Reset">
              Reset
            </button>
            <button className="btn btn2 mb-4 mt-2" type="Submit">
              Submit
            </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
