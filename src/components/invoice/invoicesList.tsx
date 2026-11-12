import InvoicesListItem from "./InvoicesListItem";
import Link from "next/link";

const data = [
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
        discount: 10,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
      {
        discount: 0,
        id: "8f0e0bd7-bds07-4463-bb1c-3eaa3ad71be66",
        price: 1500,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 10,
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
        discount: 3,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
      {
        discount: 5,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 10400,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 14,
      },
    ],
  },
  {
    id: 3,
    address: "ddddd",
    billNumber: "FYB-2026083-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "mammad",
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

export default function InvoicesList() {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <div>
          <p className="font-bold text-[24px]">فاکتورها</p>
          <p className="text-[16px]">مشاهده، جستجو و مدیریت فاکتورهای صادر شده</p>
        </div>
        <div className="flex items-center gap-x-3">
          <Link
            className="bg-primary-secondary text-white px-5 py-2 rounded hover:bg-primary transition-all "
            href="/invoices/new"
          >
            فاکتور جدید
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-[25px_repeat(7,minmax(0,1fr))] gap-2 px-2 bg-background-secondary rounded py-1">
        <div className="flex items-center justify-center text-[16px] py-2 font-medium">
          #
        </div>
        <div className="flex items-center justify-center text-[16px] py-2 font-medium">
          شماره فاکتور
        </div>
        <div className="flex items-center justify-center text-[16px] py-2 font-medium">
          تاریخ صدور
        </div>
        <div className="flex items-center justify-center text-[16px] py-2 font-medium">
          تاریخ پرداخت
        </div>
        <div className="flex items-center justify-center text-[16px] py-2 font-medium">
          مشتری
        </div>
        <div className="flex items-center justify-center text-[16px] py-2 font-medium">
          مبلغ کل
        </div>
        <div className="flex items-center justify-center text-[16px] py-2 font-medium">
          وضعیت پرداخت
        </div>
        <div className="flex items-center justify-center text-[16px] py-2 font-medium">
          عملیات
        </div>
      </div>
      {data.map((invoice) => {
        return (
          <Link key={invoice.id} href={`invoices/${invoice.id}`}>
            <InvoicesListItem invoice={invoice} />
          </Link>
        );
      })}
    </div>
  );
}
