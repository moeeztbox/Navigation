import React, { useState, useEffect } from "react"; //importing useState and useEffect hook
import Logout from "./Logout"; //importing Logout from Logout page
import JoditEditor from "jodit-react"; //importing this library installed via npm for editor
import { useNavigate } from "react-router-dom"; //importing navigate hook

function Editor() {
  //This state stores the data which is directly enter in text editor

  const [text, setText] = useState("");

  const [username, setUsername] = useState();

  //This state store data which is present in text.By default it is empty array because we need
  //data from local storage

  const [savedText, setSavedText] = useState([]);
  const navigate = useNavigate();

  //Use effect is used to run few conditons while page rendering.

  useEffect(() => {
    /*We have created localstorage for login in login page so here I have assign local storage to
    a constant variable and that variable check either this item gets from localstorage or not
    if not then it will show an alert and navigate to login page  or else it will stay on this page */

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
      alert("You haven't Login or Login expire");
    }

    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      const usernameData = localStorage.getItem(storedUsername);
      if (usernameData) {
        setSavedText(JSON.parse(usernameData));
        //setSavedText(JSON.parse(savedData)); //JSON.parse is used to print object
      }
    }
  }, [navigate]);

  //it is displaying previous data and entering new text in data and storing data in savedtext
  const handleSaved = () => {
    const newData = [...savedText, text];
    setSavedText(newData);
    localStorage.setItem(username, JSON.stringify(newData));
    setText("");

    //setSavedText(newData);
    //localStorage.setItem("savedText", JSON.stringify(newData)); //it converts object into string
  };
  return (
    <div>
      <JoditEditor value={text} onBlur={(enterdData) => setText(enterdData)} />
      <button onClick={handleSaved} className="btn1">
        Save
      </button>
      <button onClick={() => setSavedText([])} className="btn1">
        Clear
      </button>
      <Logout />
      <h3>Editor Text</h3>
      {savedText.map((savedText, index) => {
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: savedText }}
          ></div>
        );
      })}
    </div>
  );
}

export default Editor;
