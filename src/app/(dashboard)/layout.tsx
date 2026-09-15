import AppSidebar from "@/components/AppSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <AppSidebar />
      {children}
    </main>
  );
}
