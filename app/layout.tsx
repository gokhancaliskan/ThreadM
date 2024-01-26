import { Inter } from "next/font/google";
import "./global.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <Topbar />
          <main>
            <LeftSidebar />

            <section className="main-container">
              <div className="w-full max-w-4x1">{children}</div>
            </section>

            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </ClerkProvider>
    </html>
  );
}