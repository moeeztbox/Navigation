import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ExpertContext } from "./Expert/ExpertContext";

function Table() {
  const { experts } = useContext(ExpertContext);
  const navigate = useNavigate();

  const handleAddExpert = () => {
    navigate("/add-expert");
  };
  const OpenProfile = (e) => {
    const name = e.target.innerText;
    const hello = JSON.parse(localStorage.getItem(name));
    localStorage.setItem("data", JSON.stringify(hello));
    navigate("/profile");
  };

  return (
    <>
      <div className="container mt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Task Table</h3>
          <button className="btn btn-primary" onClick={handleAddExpert}>
            Add Expert
          </button>
        </div>
        <table className="table  mt-3">
          <thead className="tablehead">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Task Title</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {experts.map((expert, index) => (
              <tr key={index}>
                <td>
                  <a onClick={OpenProfile} href="">
                    {expert.Name}
                  </a>
                </td>
                <td>{expert.Status}</td>
                <td>{expert.TaskTitle}</td>
                <td>{expert.Time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
