import React from "react";
import { useEffect, useRef } from "react";
function About() {
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) return;
    alert("about page loaded");
    ref.current = true;
  }, []);
  return <h1>I AM ABOUT PAGE</h1>;
}

export default About;
