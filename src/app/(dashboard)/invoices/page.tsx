import type { Metadata } from "next";

import InvoicesList from "@/components/invoice/invoicesList";

export const metadata: Metadata = {
  title: "Invoices",
};

export default function InvoicesPage() {
  return (
    <>
      <section>bills management</section>
      <InvoicesList />
    </>
  );
}
