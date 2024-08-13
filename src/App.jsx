import { useState } from "react";
import FeedBackData from "./FeedBackData";
import FeedBackList from "./FeedBackList";

function App(){

  const [feedback,setfeedback]=useState(FeedBackData)
  return(
    <>
      <FeedBackList feedback={feedback}/>
    </>
  )
}
export default App