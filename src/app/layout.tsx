import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/redux/providers";


export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "API Rick and Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-100 text-gray-900"
      >
        <div >
          <Providers >{children}</Providers>
        </div>
      </body>
    </html>
  );
}
