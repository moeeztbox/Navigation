import React from "react";
import { useEffect, useRef } from "react";
function Contact() {
  const ref = useRef(false);
  useEffect(() => {
      if (ref.current) return;
    alert("contact page loaded");
    ref.current = true;
  },[]);
  return <h1>I AM CONTACT PAGE</h1>;
}
export default Contact;
