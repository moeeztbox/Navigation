import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setdata] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Phone: "",
    Subject: "1",
    Message: "",
  });
  const [feedback, setfeedback] = useState([]);
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedBack = {
      data,
      id: uuidv4(),
    };
    setfeedback([...feedback, newFeedBack]);
  };

  const Reset = () => {
    setdata({
      Firstname: "",
      Lastname: "",
      Email: "",
      Phone: "",
      Subject: "1",
      Message: "",
    });
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ marginLeft: "20px" }} className="container">
        <form onSubmit={handleSubmit}>
          <h1>Contact Form</h1>
          <p>
            Let us know your questions, suggestions and concerns by filling out
            the <br /> contact form below.
          </p>
          <label className="mb-2" htmlFor="Firstname">
            Name<span className="redspan">*</span>
          </label>
          <br />
          <input
            className="input mb-3"
            type="text"
            placeholder="First"
            name="Firstname"
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Last"
            name="Lastname"
            onChange={handleChange}
          />
          <br />
          <label className="mb-2" htmlFor="Email">
            Email<span className="redspan">*</span>
          </label>
          <label style={{ marginLeft: "236px" }} htmlFor="Phone">
            Phone<span className="redspan">*</span>
          </label>
          <br />
          <input
            className="input mb-3"
            type="Email"
            placeholder="john.doe@example.com"
            name="Email"
            onChange={handleChange}
          />
          <input
            className="input"
            type="Phone"
            placeholder="0301 2345678"
            name="Phone"
            onChange={handleChange}
          />
          <br />
          <label className="mb-2" htmlFor="Subject">
            Subject<span className="redspan">*</span>
          </label>
          <br />
          <select
            defaultValue="1"
            style={{ width: "527px" }}
            className="form-select input"
            name="Subject"
            onChange={handleChange}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div style={{ width: "527px" }} className="mb-4 mt-3">
            <label className="form-label" htmlFor="message">
              Message<span className="redspan">*</span>
            </label>
            <textarea
              className="form-control"
              rows="1"
              placeholder="Tell us how we can help you"
              name="Message"
              onChange={handleChange}
            ></textarea>
          </div>
          <button onClick={Reset} className="btn mb-4" type="reset">
            Reset
          </button>
          <button className="btn btn2 mb-4" type="submit">
            Submit
          </button>
          <div>
            <h2>Submitted Feedback:</h2>
            <ul>
              {feedback.map((item) => (
                <li key={item.id}>
                  <strong>Name:</strong> {item.data.Firstname}{" "}
                  {item.data.Lastname} <br />
                  <strong>Email:</strong> {item.data.Email} <br />
                  <strong>Phone:</strong> {item.data.Phone} <br />
                  <strong>Subject:</strong> {item.data.Subject} <br />
                  <strong>Message:</strong> {item.data.Message} <br />
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
