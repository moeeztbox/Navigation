import { useState } from 'react'
import Form from './FeedBackForm'
import { v4 as uuidv4 } from 'uuid'
import FeedBackData from "./FeedBackData";
import FeedBackList from "./FeedBackList";

function App() {

  const [feedback,setfeedback]=useState(FeedBackData)
  const AddFeedBack=(newFeedback)=>{
    newFeedback.id=uuidv4()
    setfeedback([newFeedback,...feedback])
  }
  return (<>
    <Form handleAdd={AddFeedBack}/>
    <FeedBackList feedback={feedback}/>
    </>
  )
}

export default App

