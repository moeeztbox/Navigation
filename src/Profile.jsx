import React from "react";
import FormOutput from "./Form/FormOutput";

function Profile() {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const fullDate = `${date}/0${month}/${year}`;
  const name = localStorage.getItem("name");

  return (
    <div className="container">
      <div className="box mt-5">
        <h6>
          <a className="expertshover" href="">
            Experts
          </a>
          /
        </h6>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ flexGrow: 1, marginRight: "auto" }}>{name}</h3>
          <div style={{ marginLeft: "auto" }} className="dropdown">
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
                <a className="dropdown-item" href="#">
                  Delete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="./Form">
                  Add
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>Created on: {fullDate} </p>
        <FormOutput />
      </div>
    </div>
  );
}

export default Profile;
