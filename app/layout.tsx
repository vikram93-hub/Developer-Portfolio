import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikramarka Mahendra | Full Stack Developer",
  description:
    "Portfolio of Vikramarka Mahendra, Integrated M.Tech Software Engineering student focused on Java, Spring Boot, REST APIs, MySQL, and backend development.",

  keywords: [
    "Vikramarka Mahendra",
    "Java Developer",
    "Spring Boot Developer",
    "Full Stack Developer",
    "Software Engineering Student",
    "REST API Developer",
  ],

  authors: [
    {
      name: "Vikramarka Mahendra",
    },
  ],

  openGraph: {
    title: "Vikramarka Mahendra | Full Stack Developer",
    description:
      "Java and Spring Boot developer portfolio showcasing projects, skills, and learning journey.",
    url: "https://developer-portfolio-taupe-two.vercel.app",
    siteName: "Vikramarka Mahendra Portfolio",
    type: "website",
  },

  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}