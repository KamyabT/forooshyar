import AppSidebar from "@/components/AppSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <AppSidebar />
      <main>{children}</main>
    </div>
  );
}
