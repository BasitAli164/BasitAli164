'use client'
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    
        true
  );
  function toggle() {
    setIsDark((prev) => !prev);
  }
  useEffect(()=>{
    //  localStorage.getItem("isDark")==="false"?false:true // both are same
        // localStorage.getItem("isDark")==="true"
    setIsDark(localStorage.getItem("isDark")==="true")
  },[])
  useEffect(() => {
    localStorage.setItem("isDark",isDark)
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={toggle}>{children}</ThemeContext.Provider>
  );
}
