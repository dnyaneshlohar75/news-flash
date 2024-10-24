import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

//Providers
import { SocketProvider } from "./../providers/SocketProvider";
import { UiProvider } from "./../providers/UiProvider";
import Header from "./_components/Header";
import { ChangeLocalToGlobalNews } from "@/context/ChangeLocalToGlobalNews";
import AuthProvider from "@/providers/AuthProvider";
import { getServerSession } from "next-auth";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Flash",
  description: "Get any news in 60 words.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${noto_sans.className} min-h-screen flex flex-col`}>
        <AuthProvider>
        <UiProvider>
          <SocketProvider>
            <ChangeLocalToGlobalNews>
              {session ? <Header /> : <></>}              
              <main className = "flex-1 bg-slate-50">
                {children}
              </main>
            </ChangeLocalToGlobalNews>
          </SocketProvider>
        </UiProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
