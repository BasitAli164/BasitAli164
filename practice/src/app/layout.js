import ThemeProvider from "@/context/ThemeContext";
import "./globals.css";

export const metadata={
  title:{
    template:"%s",
    default:"Basit's Ecommerce"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
