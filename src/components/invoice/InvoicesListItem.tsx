import { format } from "date-fns-jalali";
import { Download } from "lucide-react";

type Invoice = {
  id: number;
  billNumber: string;
  invoiceCreationDate: string;
  invoicePaymentDate: string;
  name: string;
  price: number;
  paymentStatus: string;
  status: "paid" | "pending" | "rejected";
};

type InvoiceProps = {
  invoice: Invoice;
};

export default function InvoicesListItem({ invoice }: InvoiceProps) {
  const billTotalAmount = invoice.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const billTotalDiscount = invoice.items.reduce(
    (acc, item) => acc + item.price * item.quantity * (item.discount / 100),
    0,
  );

  const netPaid = billTotalAmount - billTotalDiscount;

  console.log(invoice, 660066);
  return (
    <div className="grid grid-cols-[25px_repeat(7,minmax(0,1fr))] gap-2 px-2 bg-background border-b-1 border-b-gray-200 py-1 hover:bg-primary-hover">
      <div className="text-center text-[16px] py-1 font-normal">
        {invoice.id.toLocaleString("fa-IR")}
      </div>
      <div className="text-center text-[16px] py-1 font-normal">{invoice.billNumber}</div>
      <div className="text-center text-[16px] py-1 font-normal">
        {format(invoice.invoiceCreationDate, "yyyy/MM/dd")}
      </div>
      <div className="text-center text-[16px] py-1 font-normal">
        {format(invoice.invoicePaymentDate, "yyyy/MM/dd")}
      </div>
      <div className="text-center text-[16px] py-1 font-normal">{invoice.name}</div>
      <div className="text-center text-[16px] py-1 font-normal">
        {netPaid.toLocaleString("fa-IR")}
      </div>
      <div className="text-center text-[16px] py-1 font-normal">{invoice.status}</div>
      <div className="text-center text-[16px] py-1 font-normal">
        <Download />
      </div>
    </div>
  );
}
