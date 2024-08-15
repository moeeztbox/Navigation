import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import FormOutput from "./FormOutput";
function App() {
  const [feedback, setfeedback] = useState([]);

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    setfeedback([...feedback, newFeedBack]);
  };
  return (
    <>
      <Form handleAdd={addFeedBack} />
     <FormOutput output={feedback}/>
    </>
  );
}

export default App;
