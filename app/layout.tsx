import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darryl Yang's Portfolio",
  description:
    "Darryl Yang Hanming is a free-lance fullstack developer and an undergraduate at the University of Singapore. This his portfolio which people can view to learn more about him.",
};
//Remember, for this is set isLoggedIn to always true, remember to change if you set up authentication
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
