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
  status: "paid" | "pending" | "rejected" | "canceled";
};

type InvoiceProps = {
  invoice: Invoice;
};

const statusDesigns = {
  paid: "bg-green-500 rounded-md py-1",
  pending: "bg-gray-300 rounded-md py-1",
  rejected: "bg-red-500 rounded-md py-1",
};

const statusLabels = {
  paid: "پرداخت شده",
  pending: "در انتظار پرداخت",
  rejected: "رد شده",
  canceled: "لغو شده",
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

  const status = statusLabels[invoice.status];

  return (
    <div className="grid grid-cols-[25px_repeat(7,minmax(0,1fr))] items-center gap-2 px-2 bg-background border-b-1 border-b-gray-200 py-1 hover:bg-primary-hover">
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
      <div className={`text-center text-[16px] py-1 font-normal `}>
        <span className={`${statusDesigns[invoice.status]} inline-flex justify-center w-32`}>{status}</span>
      </div>
      <div className="text-center text-[16px] py-1 font-normal justify-self-center">
        <Download />
      </div>
    </div>
  );
}
