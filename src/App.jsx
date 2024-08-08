import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about-us";
import Contact from "./contact";
import Notfound from "./notfound";

function App() {
  return (
    <>
      <button>
        <a href="/">HOME</a>
      </button>
      <button>
        <a href="/about-us">ABOUT</a>
      </button>
      <button>
        <a href="/contact">CONTACT</a>
      </button>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
