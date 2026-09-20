import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}
