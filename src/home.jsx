import React from "react";
import { useEffect,useRef } from "react";
function Home() {

  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) return;
    alert("home page loaded");
    ref.current = true;
  }, []);
  return <h1>I AM HOME PAGE</h1>;
}
export default Home