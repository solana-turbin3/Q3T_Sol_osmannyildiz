import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Remixers",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="text-3xl font-bold">Remixers</div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
