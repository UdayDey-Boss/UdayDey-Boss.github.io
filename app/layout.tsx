import type { Metadata } from "next";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uday Dey — Full-Stack Engineer",
  description:
    "Uday Dey — Computer Science & Engineering student and full-stack developer based in Dhaka, Bangladesh. Skilled in C#, PHP, JavaScript, MVC architecture and MySQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
