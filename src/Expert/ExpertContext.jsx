import React, { createContext, useEffect, useState } from "react";

export const ExpertContext = createContext();

const ExpertProvider = ({ children }) => {
  const [experts, setExperts] = useState(() => {
    // Load experts from localStorage on initial render
    const storedExperts = localStorage.getItem("experts");
    return storedExperts ? JSON.parse(storedExperts) : [];
  });

  useEffect(() => {
    localStorage.setItem("experts", JSON.stringify(experts));
  });

  const addExpert = (newExpert) => {
    setExperts([...experts, newExpert]);
  };

  const deleteExpert = (id) => {
    setExperts(() => {
      const updatedExperts = experts.filter((expert) => expert.id !== id);
      localStorage.setItem("experts", JSON.stringify(updatedExperts)); // Sync localStorage
      return updatedExperts; // Update state
    });
  };

  const updateExpert = (updatedExpert) => {
    setExperts(() => {
      const updatedExperts = experts.map((expert) =>
        expert.id === updatedExpert.id ? updatedExpert : expert
      );
      localStorage.setItem("experts", JSON.stringify(updatedExperts)); // Sync localStorage
      return updatedExperts; // Update state
    });
  };

  return (
    <ExpertContext.Provider
      value={{ experts, addExpert, deleteExpert, updateExpert }}
    >
      {children}
    </ExpertContext.Provider>
  );
};

export default ExpertProvider;
