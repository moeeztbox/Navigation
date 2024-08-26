import React, { createContext, useEffect, useState } from "react";

export const ExpertContext = createContext();

const ExpertProvider = ({ children }) => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    const storedExpert = localStorage.getItem("experts");
    if (storedExpert) {
      setExperts(JSON.parse(storedExpert));
    }
  }, []);

  useEffect(() => {
    if (experts.length > 0) {
      localStorage.setItem("experts", JSON.stringify(experts));
    }
  }, [experts]);

  const addExpert = (newExpert) => {
    setExperts([...experts, newExpert]);
  };

  //store data in local storage and get data from local storage so that we can access local storage data on any page

  return (
    <ExpertContext.Provider value={{ experts, addExpert }}>
      {children}
    </ExpertContext.Provider>
  );
};
export default ExpertProvider;
