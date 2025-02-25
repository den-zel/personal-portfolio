import type { Metadata } from "next";
import { DM_Sans, Inter, Manrope, Sora } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A UI designer portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${sora.className}`}>
        {/* Next top loader */}
        <NextTopLoader color='#2260FF' showSpinner={false} />
        {/* INit aos */}
        <AOSInit />
        {children}
        </body>
    </html>
  );
}
