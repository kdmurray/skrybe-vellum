import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "skrybe-vellum",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
