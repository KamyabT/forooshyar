import InvoicesListItem from "./InvoicesListItem";

const data = [
  {
    id: 1,
    billNumber: "INV-1403-001",
    invoiceCreationDate: "1403/06/21",
    invoicePaymentDate: "1403/06/23",
    fullName: "علی محمدی",
    price: 4850000,
    paymentStatus: "paid",
  },
  {
    id: 2,
    billNumber: "INV-1403-001",
    invoiceCreationDate: "1403/06/21",
    invoicePaymentDate: "1403/06/23",
    fullName: "علی محمدی",
    price: 4850000,
    paymentStatus: "paid",
  },
  {
    id: 3,
    billNumber: "INV-1403-001",
    invoiceCreationDate: "1403/06/21",
    invoicePaymentDate: "1403/06/23",
    fullName: "علی محمدی",
    price: 4850000,
    paymentStatus: "paid",
  },
  {
    id: 4,
    billNumber: "INV-1403-001",
    invoiceCreationDate: "1403/06/21",
    invoicePaymentDate: "1403/06/23",
    fullName: "علی محمدی",
    price: 4850000,
    paymentStatus: "paid",
  },
  {
    id: 5,
    billNumber: "INV-1403-001",
    invoiceCreationDate: "1403/06/21",
    invoicePaymentDate: "1403/06/23",
    fullName: "علی محمدی",
    price: 4850000,
    paymentStatus: "paid",
  },
  {
    id: 6,
    billNumber: "INV-1403-001",
    invoiceCreationDate: "1403/06/21",
    invoicePaymentDate: "1403/06/23",
    fullName: "علی محمدی",
    price: 4850000,
    paymentStatus: "paid",
  },
  {
    id: 7,
    billNumber: "INV-1403-001",
    invoiceCreationDate: "1403/06/21",
    invoicePaymentDate: "1403/06/23",
    fullName: "علی محمدی",
    price: 4850000,
    paymentStatus: "paid",
  },
  {
    id: 8,
    billNumber: "INV-1403-001",
    invoiceCreationDate: "1403/06/21",
    invoicePaymentDate: "1403/06/23",
    fullName: "علی محمدی",
    price: 4850000,
    paymentStatus: "paid",
  },
];

export default function InvoicesList() {
  return (
    <div>
      <div className="mb-3">
        <p>فاکتورها</p>
        <p>مشاهده، جستجو و مدیریت فاکتورهای صادر شده</p>
      </div>
      <div className="grid grid-cols-[25px_repeat(7,minmax(0,1fr))] gap-2 px-2 bg-background-secondary rounded py-1">
        <div className="flex items-center justify-center">#</div>
        <div className="flex items-center justify-center">شماره فاکتور</div>
        <div className="flex items-center justify-center">تاریخ صدور</div>
        <div className="flex items-center justify-center">تاریخ پرداخت</div>
        <div className="flex items-center justify-center">مشتری</div>
        <div className="flex items-center justify-center">مبلغ کل</div>
        <div className="flex items-center justify-center">وضعیت پرداخت</div>
        <div className="flex items-center justify-center">عملیات</div>
      </div>
      {data.map((invoice) => {
        return <InvoicesListItem invoice={invoice} key={invoice.id} />;
      })}
    </div>
  );
}
