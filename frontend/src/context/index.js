import { createContext } from "react";
import React, { useState } from "react";

export const DropDownContext = createContext();

export const DropDownContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropDownContext.Provider value={{ isOpen, toggle }}>
      {children}
    </DropDownContext.Provider>
  );
};
