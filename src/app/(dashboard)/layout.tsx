import AppSidebar from "@/components/appSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <AppSidebar />
      {children}
    </main>
  );
}
