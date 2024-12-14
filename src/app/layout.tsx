import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/redux/providers";
import HeadersF from "@/componnet/Headers/Headers";

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
      <body className="bg-amber-100">
          <Providers> 
              <div className="flex bg-amber-100 justify-center items-center">
                <HeadersF />
              </div>
            {children}
          </Providers>
      </body>
    </html>
  );
}
