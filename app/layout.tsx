import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Vikramarka Mahendra | Full Stack Developer",
  description:
    "Portfolio of Vikramarka Mahendra, a Software Engineering student learning Java, Spring Boot, backend development, and full-stack technologies.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}