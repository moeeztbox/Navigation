import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./AboutUs";
import Contact from "./contact";

function App() {
  return (
    <>
      <div>
        <ul>
          <li><a href="/home">HOME</a></li>
          <li><a href="/AboutUs">ABOUT</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </div>

      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
