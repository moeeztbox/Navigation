import React from "react";
import Table from "./Table";
import Profile from "./Profile";
import EditExpert from "./Expert/EditExpert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddExpert from "./Expert/AddExpert";
import ExpertProvider from "./Expert/ExpertContext";

function App() {
  return (
    <ExpertProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-expert" element={<AddExpert />} />
          <Route path="/edit-expert" element={<EditExpert />} />
        </Routes>
      </Router>
    </ExpertProvider>
  );
}

export default App;
