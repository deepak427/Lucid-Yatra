import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>}
      {}
    </>
  );
}
