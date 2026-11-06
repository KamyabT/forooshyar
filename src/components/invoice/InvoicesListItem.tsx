import React from "react";

type Invoice = {
  id: number;
  billNumber: string;
  invoiceCreationDate: string;
  invoicePaymentDate: string;
  fullName: string;
  price: number;
  paymentStatus: string;
};

type InvoiceProps = {
  invoice: Invoice;
};

export default function InvoicesListItem({ invoice }: InvoiceProps) {
  console.log(invoice);
  return (
    <div className="grid grid-cols-[25px_repeat(7,minmax(0,1fr))] gap-2 px-2 bg-background border-b-1 border-b-gray-200 py-1">
      <div className="text-center">{invoice.id}</div>
      <div className="text-center">{invoice.billNumber}</div>
      <div className="text-center">{invoice.invoiceCreationDate}</div>
      <div className="text-center">{invoice.invoicePaymentDate}</div>
      <div className="text-center">{invoice.fullName}</div>
      <div className="text-center">{invoice.price}</div>
      <div className="text-center">{invoice.paymentStatus}</div>
      <div className="text-center">actions</div>
    </div>
  );
}
