import InvoicesListItem from "./InvoicesListItem";
import InvoiceFilters from "../../components/invoice/InvoiceFilters";
import Link from "next/link";
import { getInvoices } from "../../services/invoices.service";


export default async function InvoicesList() {
  const response = await getInvoices();
  const data = await response.data.items;


  return (
    <div className="">
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
      <InvoiceFilters />
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
      {data.map((invoice, index) => {
        return (
          <Link key={invoice.id} href={`invoices/${invoice.id}`}>
            <InvoicesListItem invoice={invoice} index={index}/>
          </Link>
        );
      })}
    </div>
  );
}
