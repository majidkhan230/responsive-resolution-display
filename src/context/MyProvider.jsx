import { createContext, useState } from "react";

export const themeContext = createContext();

export const MyProvider = ({ children }) => {
 const  [theme,setTheme] = useState('light')
  return (
    <div>
      <themeContext.Provider value={{...{theme,setTheme}}}>{children}</themeContext.Provider>
    </div>
  );
};
