import React from "react";
import Table from "./Table";
import Profile from "./Profile";
import Form from "./Form/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
