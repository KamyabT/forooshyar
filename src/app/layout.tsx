// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       <aside>Sidebar</aside>

//       <main>{children}</main>
//     </div>
//   );
// }


import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "ForoshYar",
  description: "Simple invoice generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}