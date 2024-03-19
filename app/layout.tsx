import type { Metadata } from "next";
import { DM_Sans, Inter, Manrope, Sora } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

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
      <body className={`bg-peach-600 ${dm_sans.className}`}>{children}</body>
    </html>
  );
}
