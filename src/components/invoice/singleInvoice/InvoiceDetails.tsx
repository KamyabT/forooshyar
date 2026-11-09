import { FileText } from "lucide-react";
import { format } from "date-fns-jalali";

export default function InvoiceDetails({ invoice }) {
  return (
    <div className="flex flex-col bg-background rounded-lg p-4 shadow-md gap-y-4">
      <div className="flex items-center gap-x-2">
        <FileText />
        <h5>جزئیات فاکتور</h5>
      </div>
      <div className="flex flex-col bg-background-third border-1 border-gray-200 p-3 rounded-lg h-full">
        <div className="flex justify-between items-center">
          <p>شماره فاکتور:</p>
          <p>{invoice.billNumber}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>تاریخ صدور:</p>
          <p>{format(invoice.invoiceCreationDate, "yyyy/MM/dd")}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>تاریخ سررسید:</p>
          <p>{format(invoice.invoicePaymentDate, "yyyy/MM/dd")}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>وضعیت</p>
          <p>{invoice.status}</p>
        </div>
      </div>
    </div>
  );
}
