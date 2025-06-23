import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    // localStorage.getItem("isDark")==="false"?false:true
        localStorage.getItem("isDark")==="true"
  );
  function toggle() {
    setIsDark((prev) => !prev);
  }
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
