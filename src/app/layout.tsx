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
      <body
        className="bg-gray-100 text-gray-900"
      >
        <div >
          <Providers> 
            <div className="width-1024 text-black font-black">
              <div className="justify-items-center text-white">
                <HeadersF />
              </div>
            </div>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
