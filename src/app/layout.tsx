import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyricsweb",
  description: "Welcome back!",
  openGraph: {
    title: "Lyricsweb",
    description: "Welcome back! Please enter your details.",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "Lyricsweb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyricsweb",
    description: "Welcome back! Please enter your details.",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
