import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  function toggle() {
    setIsDark((prev) => !prev);
  }
  useEffect(() => {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={toggle}>{children}</ThemeContext.Provider>
  );
}
