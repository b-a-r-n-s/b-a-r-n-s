import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barnabas Adejo — Engineer / Builder",
  description: "Electrical and Electronics Engineering student building toward AI Engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
