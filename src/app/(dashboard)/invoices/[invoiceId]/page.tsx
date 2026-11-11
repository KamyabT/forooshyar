import { notFound } from "next/navigation";
import Link from "next/link";
import InvoiceCard from "../../../../components/invoice/singleInvoice/InvoiceCard";
import InvoiceCustomer from "../../../../components/invoice/singleInvoice/InvoiceCustomer";
import InvoiceDetails from "../../../../components/invoice/singleInvoice/InvoiceDetails";
import InvoiceItemsList from "../../../../components/invoice/singleInvoice/InvoiceItemsList";
import { File , ShoppingCart, Tag , Calculator, Wallet} from "lucide-react";

const invoices = [
  {
    id: 1,
    address: "aaaaa",
    billNumber: "FYB-2026113-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "ali",
    phone: "09123456789",
    status: "paid",
    items: [
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-basdb1c-3eaa3a7dsf1be66",
        price: 1000,
        product: "second",
        productDescription: "asdsad",
        quantity: 15,
      },
    ],
  },
  {
    id: 2,
    address: "sssss",
    billNumber: "FYB-2026093-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "reza",
    phone: "09123456789",
    status: "pending",
    items: [
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    address: "ddddd",
    billNumber: "FYB-2026083-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "mamad",
    phone: "09123456789",
    status: "rejected",
    items: [
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
    ],
  },
  {
    id: 4,
    address: "ddddd",
    billNumber: "FYB-2026114-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "hasan",
    phone: "09123456789",
    status: "paid",
    items: [
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
    ],
  },
  {
    id: 5,
    address: "ddddd",
    billNumber: "FYB-20261020-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "ssss",
    phone: "09123456789",
    status: "paid",
    items: [
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
    ],
  },
  {
    id: 6,
    address: "ddddd",
    billNumber: "FYB-2026123-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "ssss",
    phone: "09123456789",
    status: "pending",
    items: [
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
    ],
  },
];

export default async function page({ params }) {
  const { invoiceId } = await params;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(invoiceId);

  const invoice = invoices.find((invoice) => {
    return invoice.id === Number(invoiceId);
  });

  if (!invoice) {
    notFound();
  }

  console.log(invoice);
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2 justify-center">
          <div className="flex text-[18px] gap-x-2 font-bold">
            <File size={24} />
            فاکتور شماره {invoice.billNumber}
          </div>
          <div className="bg-green-200 py-2 px-3 rounded-md">پرداخت شده</div>
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
        <InvoiceCard title="جمع کل" Icon={ShoppingCart}/>
        <InvoiceCard title="تخفیف" Icon={Tag}/>
        <InvoiceCard title="مالیات (%)" Icon={Calculator}/>
        <InvoiceCard title="مبلغ پرداخت شده" Icon={Wallet}/>
      </div>
      <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-4">
        <InvoiceDetails invoice={invoice} />
        <InvoiceCustomer invoice={invoice} />
      </div>
      <div className="bg-background p-4 rounded-lg shadow-md ">
        <InvoiceItemsList invoice={invoice} />
      </div>
    </div>
  );
}
