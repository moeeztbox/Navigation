import React from 'react'

function FormOutput({output}) {
    if (!output || output.length === 0) {
        return <p style={{ color: "blue", fontSize: "25px" }}>No feedback yet</p>;
      }
      return (
        <>
        <div style={{backgroundColor:"white"}}>
        <h2>Submitted Feedback:</h2>
        <ul>
          {output.map((item) => (
            <li key={item.id}>
              <strong>Name:</strong> {item.data.FirstName} {item.data.LastName}{" "}
              <br />
              <strong>Email:</strong> {item.data.Email} <br />
              <strong>Phone:</strong> {item.data.Phone} <br />
              <strong>Subject:</strong> {item.data.Subject} <br />
              <strong>Message:</strong> {item.data.Message} <br />
            </li>
          ))}
        </ul>
      </div>
        </>)
}

export default FormOutput
