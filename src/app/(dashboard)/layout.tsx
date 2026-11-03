import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | ForoshYar",
    default: "ForoshYar",
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        <main className=" p-5">{children}</main>
      </div>
    </div>
  );
}
