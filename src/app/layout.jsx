import { Barlow } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css"

const barlow = Barlow({
  weight: '400',
  subsets: ["latin"]
});

export const metadata = {
  title: "Food App",
  description: "Food Order Website App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
