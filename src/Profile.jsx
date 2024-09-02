import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ExpertContext } from "./Expert/ExpertContext";

function Profile() {
  const data = JSON.parse(localStorage.getItem("data"));

  const { deleteExpert } = useContext(ExpertContext);

  const navigate = useNavigate();

  if (!data) {
    return <p>No data found. Please select an expert from the table.</p>;
  }

  const handleDelete = () => {
    deleteExpert(data.id); // Delete the expert using its ID
    localStorage.removeItem(data.id); // Remove the data with specific id
    localStorage.removeItem("data"); // Remove from localStorage
    navigate("/"); // Navigate back to the main page after deletion
  };

  const handleEdit = () => {
    navigate("/edit-expert"); // Navigate to EditExpert page
  };

  return (
    <div className="container">
      <div className="box mt-5">
        <h6 style={{ marginBottom: "30px" }}>
          <a className="expertshover" href="./">
            Experts
          </a>
          /
        </h6>
        <div className="container card ">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Name: {data.Name}</h3>
            <div className="dropdown mt-3">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Option
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" onClick={handleDelete} href="#">
                    Delete
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={handleEdit} href="#">
                    Edit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p>Time: {data.Time}</p>
          <p>Status: {data.Status}</p>
          <p>Task Title: {data.TaskTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
