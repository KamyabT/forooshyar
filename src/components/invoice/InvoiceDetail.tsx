import billNumberGenerator from "./utils/billNumberGenerator";

import { ReceiptText } from "lucide-react";

const InvoiceDetail = () => {
  billNumberGenerator()
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-3">
        <ReceiptText />
        <h3>اطلاعات فاکتور</h3>
      </div>
      <form className="flex flex-col gap-2" action="">
        <div className="flex justify-between">
          <label className="" htmlFor="invoiceNumber">شماره فاکتور</label>
          <input type="text" id="invoiceNumber" className="border border-gray-300 text-left px-3 py-1 rounded-md" value={billNumberGenerator()}/>
        </div>
        <div className="flex justify-between">
          <label htmlFor="invoiceDate">تاریخ فاکتور</label>
          <input type="date" id="invoiceDate" className="border border-gray-300 text-left px-3 py-1 rounded-md" />
        </div>
        <div className="flex justify-between">
          <label htmlFor="dueDate">تاریخ پرداخت</label>
          <input type="date" id="dueDate" className="border border-gray-300 text-left px-3 py-1 rounded-md" />
        </div>
      </form>
    </div>
  );
};

export default InvoiceDetail;
