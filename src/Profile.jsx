import React from "react";

function Profile() {
  const data = JSON.parse(localStorage.getItem("data"));

  return (
    <>
      <div className="container">
        <div className="box mt-5">
          <h6>
            <a className="expertshover" href="./">
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
            <h3 style={{ flexGrow: 1, marginRight: "auto" }}>
              Name: {data.Name}
            </h3>
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
              </ul>
            </div>
          </div>
          <p>Time: {data.Time} </p>
          <p>Status: {data.Status} </p>
          <p>Task Title: {data.TaskTitle} </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
