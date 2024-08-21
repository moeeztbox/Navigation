import React from "react";
import Login from "./Login";
import Editor from "./Editor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
