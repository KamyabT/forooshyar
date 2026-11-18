import { notFound } from "next/navigation";
import Link from "next/link";
import InvoiceCard from "../../../../components/invoice/singleInvoice/InvoiceCard";
import InvoiceCustomer from "../../../../components/invoice/singleInvoice/InvoiceCustomer";
import InvoiceDetails from "../../../../components/invoice/singleInvoice/InvoiceDetails";
import InvoiceItemsList from "../../../../components/invoice/singleInvoice/InvoiceItemsList";
import { File, ShoppingCart, Tag, Calculator, Wallet } from "lucide-react";
import { getInvoice } from "@/services/invoices.service";

const statusDesigns = {
  paid: "bg-green-500 rounded-md py-1",
  pending: "bg-gray-300 rounded-md py-1",
  rejected: "bg-red-500 rounded-md py-1",
  canceled: "bg-red-500 rounded-md py-1",
};

const statusLabels = {
  paid: "پرداخت شده",
  pending: "در انتظار پرداخت",
  rejected: "رد شده",
  canceled: "لغو شده",
};

export default async function page({ params }) {
  const { invoiceId } = await params;

  const response = await getInvoice(invoiceId);
  const data = await response.data;
  const items = await data.expand.items;


  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!data) {
    notFound();
  }

  const billTotalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const billTotalDiscount = items.reduce(
    (acc, item) => acc + item.price * item.quantity * (item.discount / 100),
    0,
  );

  const netPaid = billTotalAmount - billTotalDiscount;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2 justify-center">
          <div className="flex text-[18px] gap-x-2 font-bold">
            <File size={24} />
            فاکتور شماره {data.invoiceNumber}
          </div>
          <div
            className={`bg-green-200 py-2 px-3 rounded-md ${statusDesigns[data.invoiceStatus]}`}
          >
            {statusLabels[data.invoiceStatus]}
          </div>
        </div>
        <div>
          <Link
            className="bg-primary-secondary text-white px-5 py-2 rounded hover:bg-primary transition-all"
            href="/invoices"
          >
            لیست سفارشات
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-4">
        <InvoiceCard title="جمع کل" Icon={ShoppingCart} numberData={billTotalAmount} />
        <InvoiceCard title="تخفیف" Icon={Tag} numberData={billTotalDiscount} />
        <InvoiceCard title="مالیات (%)" Icon={Calculator} numberData="0" />
        <InvoiceCard title="مبلغ پرداخت شده" Icon={Wallet} numberData={netPaid} />
      </div>
      <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-4">
        <InvoiceDetails invoice={data} />
        <InvoiceCustomer invoice={data} />
      </div>
      <div className="bg-background p-4 rounded-lg shadow-md ">
        <InvoiceItemsList items={items} />
      </div>
    </div>
  );
}
