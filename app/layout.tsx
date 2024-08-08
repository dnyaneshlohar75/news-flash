import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

//Providers
import { SocketProvider } from "@/providers/SocketProvider";
import { UiProvider } from "./../providers/UiProvider";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Flash",
  description: "Get any news in 60 words.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className} bg-slate-50`}>
        <UiProvider>
          <SocketProvider>{children}</SocketProvider>
        </UiProvider>
      </body>
    </html>
  );
}
