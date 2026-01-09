import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Backend Developer Portfolio",
  description: "Portfolio of a backend developer skilled in Python, HTML, CSS, C, C++ and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navigation />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}

