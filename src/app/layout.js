import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "REESAB",
  description: "Rishabh's portfolio is a personal space where a software engineer documents his life journey, learning experiences, and professional growth. Explore insights, projects, and reflections that capture the essence of his evolving career and personal development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
