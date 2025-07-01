import React, { createContext, useState} from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
   // Theme Toggle:
  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </GlobalContext.Provider>
  );

}