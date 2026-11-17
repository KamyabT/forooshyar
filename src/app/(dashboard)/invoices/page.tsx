import type { Metadata } from "next";
import { getInvoices } from "../../../services/invoices.service";

import InvoicesList from "@/components/invoice/invoicesList";

export const metadata: Metadata = {
  title: "Invoices",
};

export default async function InvoicesPage() {
  const datas = await getInvoices();

  console.log(datas.data.items[0].expand.items, 8888);
  return (
    <>
      <InvoicesList />
    </>
  );
}
