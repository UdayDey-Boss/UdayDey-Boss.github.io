import type { Metadata } from "next";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://udaydey-boss.github.io"),

  title: {
    default: "Uday Dey | Full-Stack Engineer",
    template: "%s | Uday Dey",
  },

  description:
    "Portfolio of Uday Dey, a Computer Science & Engineering student at AIUB and Full-Stack Engineer specializing in PHP, C#, JavaScript, MVC Architecture, MySQL, and modern web application development.",

  keywords: [
    "Uday Dey",
    "Full Stack Developer",
    "Software Engineer",
    "PHP Developer",
    "JavaScript",
    "C#",
    "MVC",
    "MySQL",
    "AIUB",
    "Computer Science",
    "Bangladesh",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Uday Dey",
    },
  ],

  creator: "Uday Dey",

  openGraph: {
    title: "Uday Dey | Full-Stack Engineer",
    description:
      "Computer Science & Engineering student at AIUB building practical full-stack software solutions using PHP, C#, JavaScript, MVC Architecture and MySQL.",
    url: "https://udaydey-boss.github.io",
    siteName: "Uday Dey Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Uday Dey | Full-Stack Engineer",
    description:
      "Portfolio of Uday Dey — Full-Stack Engineer and Computer Science student at AIUB.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-bg text-ink antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
