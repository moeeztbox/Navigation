import React, { useState } from "react";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

function Form({handleAdd}) {
  const [text, settext] = useState("");
  const [btndisabled, setbtndisabled] = useState(true);
  const [message, setmessage] = useState("");
  const [rating,setrating]=useState()


const HandleSubmit=(e)=>{
  e.preventDefault()
if(text.trim().length>10){
  const newFeedBack={
text,rating
  }
  handleAdd(newFeedBack)
  settext('')
}
}


  const HandleTextChange = (e) => {
    if (text === "") {
      setmessage(null);
      setbtndisabled(true);
    } else if (text !== "" && text.trim().length <=10) {
      setbtndisabled(true);
      setmessage("Must enter atleast 10 Characters");
    } else {
      setmessage(null);
      setbtndisabled(false);
    }
    settext(e.target.value);
  };
  return (
    <form onSubmit={HandleSubmit}>
      <h2>How would you rate your service with us?</h2>
      <RatingSelect select={(rating)=>{setrating(rating)}}/>

      <div className="input-group">
        <input
          onChange={HandleTextChange}
          value={text}
          type="text"
          placeholder="Write a review"
        />
        <Button  type="submit" isDisabled={btndisabled}>Send</Button>
      </div>
      {message && <div style={{color:"red"}}>{message}</div>}
    </form>
  );
}

export default Form;
