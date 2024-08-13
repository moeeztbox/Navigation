import { useState } from 'react'
import Form from './FeedBackForm'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [feedback,setfeedback]=useState()
  const AddFeedBack=(newFeedback)=>{
    newFeedback.id=uuidv4()
    setfeedback([newFeedback,...feedback])
  }
  return (
    <Form handleAdd={AddFeedBack}/>
    
  )
}

export default App
