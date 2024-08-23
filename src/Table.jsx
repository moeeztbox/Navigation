import React, { useState } from "react";

function Table() {
  const [name, setName] = useState("");

  localStorage.setItem("name", name);

  return (
    <div className="container">
      <div className="container mt-5">
        <div className="box">
          <h3>Table Data</h3>
        </div>
        <table className="table table-xl mt-5">
          <thead className="tablehead">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Task title</th>
              <th scope="col">Status</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <a onClick={() => setName("Ali Ahmed")} href="./Profile">
                  Ali Ahmad
                </a>
              </th>
              <td>Random</td>
              <td>Random</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">
                <a onClick={() => setName("Aqsa Tbox")} href="./Profile">
                  Aqsa Tbox
                </a>
              </th>
              <td>Random</td>
              <td>Random</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">
                <a onClick={() => setName("Aqsa New")} href="./Profile">
                  Aqsa New
                </a>
              </th>
              <td>Random</td>
              <td>Random</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">
                <a onClick={() => setName("Jakob Kirkegaard")} href="./Profile">
                  Jakob Kirkegaard
                </a>
              </th>
              <td>Random</td>
              <td>Random</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">
                <a onClick={() => setName("Karsten Key")} href="./Profile">
                  Karsten Key
                </a>
              </th>
              <td>Random</td>
              <td>Random</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">
                <a onClick={() => setName("Muneeb Aslam")} href="./Profile">
                  Muneeb Aslam
                </a>
              </th>
              <td>Random</td>
              <td>Random</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">
                <a onClick={() => setName("Pablo Chuddy")} href="./Profile">
                  Pablo Chuddy
                </a>
              </th>
              <td>Random</td>
              <td>Random</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">
                <a onClick={() => setName("Ramsha Mehmood")} href="./Profile">
                  Ramsha Mehmood
                </a>
              </th>
              <td>Random</td>
              <td>Random</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">
                <a onClick={() => setName("Tbox Expert")} href="./Profile">
                  Tbox Expert
                </a>
              </th>
              <td>Random</td>
              <td>Random</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
