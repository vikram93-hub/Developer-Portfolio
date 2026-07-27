import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikram | Full Stack Developer",
  description:
    "Portfolio showcasing my projects, skills, education and development journey.",
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