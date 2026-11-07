import Link from "next/link";

export default function InvoicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>
        <Link href="/invoices">All Bills</Link>
        <Link href="/invoices/new">New Bills</Link>
      </div>
      {children}
    </main>
  );
}
