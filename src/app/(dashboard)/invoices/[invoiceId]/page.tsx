import { notFound } from "next/navigation";
import Link from "next/link";
import InvoiceCard from "../../../../components/invoice/singleInvoice/InvoiceCard";
import InvoiceCustomer from "../../../../components/invoice/singleInvoice/InvoiceCustomer";
import InvoiceDetails from "../../../../components/invoice/singleInvoice/InvoiceDetails";

const invoices = [
  {
    id: 1,
    address: "aaaaa",
    billNumber: "FYB-2026113-1451",
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
    id: 2,
    address: "sssss",
    billNumber: "FYB-2026093-1451",
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
  {
    id: 3,
    address: "ddddd",
    billNumber: "FYB-2026083-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "ssss",
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
        <div>invoice data</div>
        <div>
          <Link href="/invoices">back to list</Link>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-4">
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </div>
      <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-4">
        <InvoiceDetails invoice={invoice} />
        <InvoiceCustomer invoice={invoice} />
      </div>
      <div className="grid grid-cols-[repeat(6,minmax(0,1fr))]">
        <div className="bg-green-100">ردیف</div>
        <div className="bg-blue-100">محصول/خدمت</div>
        <div className="bg-green-100">تعداد</div>
        <div className="bg-blue-100">قیمت واحد (تومان)</div>
        <div className="bg-green-100">تخفیف (%)</div>
        <div className="bg-blue-100">مبلغ کل (تومان)</div>
      </div>

      <p>فاکتور شماره 2</p>
      <div>
        <p>{invoice.id}</p>
        <p>{invoice.address}</p>
        <p>{invoice.name}</p>
        <p>{invoice.billNumber}</p>
        <p>{invoice.invoiceCreationDate}</p>
        <p>{invoice.invoicePaymentDate}</p>
        <p>{invoice.phone}</p>
        {invoice?.items.map((item) => {
          return (
            <div key={invoice.id}>
              <p>{item.id}</p>
              <p>{item.price}</p>
              <p>{item.product}</p>
              <p>{item.quantity}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
