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
        {children}
      </body>
    </html>
  );
}
