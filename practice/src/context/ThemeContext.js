import { createContext, useState } from "react";

const ThemeContext=createContext()


export default function ThemeProvider({children}) {
    const [isDark,setIsDark]=useState(true)
    function toggle(){
        setIsDark((prev)=>!prev)
    }

  return <ThemeContext.Provider value={toggle}>
    {children}
  </ThemeContext.Provider>
}
