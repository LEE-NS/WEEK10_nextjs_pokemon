import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "1세대 포켓몬을 열람할 수 있는 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Provider>
        <body className={inter.className}>
          <h1 className="text-center mt-10 mb-10 text-3xl font-extrabold">
            포켓몬 도감
          </h1>
          {children}
        </body>
      </Provider>
    </html>
  );
}
