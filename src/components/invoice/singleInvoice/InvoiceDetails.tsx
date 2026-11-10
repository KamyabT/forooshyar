import { FileText } from "lucide-react";
import { format } from "date-fns-jalali";

export default function InvoiceDetails({ invoice }) {
  return (
    <div className="flex flex-col bg-background rounded-lg p-4 shadow-md gap-y-4">
      <div className="flex items-center gap-x-2">
        <FileText />
        <h5 className="text-[18px]">جزئیات فاکتور</h5>
      </div>
      <div className="flex flex-col bg-background-third border-1 border-gray-200 p-3 rounded-lg h-full">
        <div className="flex justify-between items-center">
          <p className="text-[16px]">شماره فاکتور:</p>
          <p className="text-[16px]">{invoice.billNumber}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[16px]">تاریخ صدور:</p>
          <p className="text-[16px]">
            {format(invoice.invoiceCreationDate, "yyyy/MM/dd")}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[16px]">تاریخ سررسید:</p>
          <p className="text-[16px]">
            {format(invoice.invoicePaymentDate, "yyyy/MM/dd")}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[16px]">وضعیت</p>
          <p className="text-[16px]">{invoice.status}</p>
        </div>
      </div>
    </div>
  );
}
