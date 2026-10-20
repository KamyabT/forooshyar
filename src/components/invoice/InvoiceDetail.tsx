import { format, newDate } from "date-fns-jalali";

import { ReceiptText } from "lucide-react";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface InvoiceDetailProps {
  invoiceIdentity: {
    billNumber: string;
    invoiceCreationDate: string;
    invoicePaymentDate: string;
  };
  setInvoiceIdentity: Dispatch<
    SetStateAction<{
      billNumber: string;
      invoiceCreationDate: string;
      invoicePaymentDate: string;
    }>
  >;
}

const InvoiceDetail = ({ invoiceIdentity, setInvoiceIdentity }: InvoiceDetailProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-3 gap-2">
        <ReceiptText />
        <h3>اطلاعات فاکتور</h3>
      </div>
      <form className="flex flex-col gap-2 w-full" action="">
        <div className="flex justify-between w-full">
          <label className="" htmlFor="invoiceNumber">
            شماره فاکتور
          </label>
          <input
            type="text"
            id="invoiceNumber"
            className="w-1/2  border border-gray-300 text-left px-3 py-1 rounded-md"
            value={invoiceIdentity.billNumber}
            disabled={true}
          />
        </div>
        <div className="flex justify-between w-full">
          <label htmlFor="invoiceDate">تاریخ فاکتور</label>
          <input
            type="date"
            id="invoiceDate"
            className="w-1/2  border border-gray-300 text-left px-3 py-1 rounded-md"
            value={invoiceIdentity.invoiceCreationDate}
            onChange={(e) =>
              setInvoiceIdentity((current) => ({
                ...current,
                invoiceCreationDate: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex justify-between w-full">
          <label htmlFor="dueDate">تاریخ پرداخت</label>
          <input
            type="date"
            id="dueDate"
            className="w-1/2  border border-gray-300 text-left px-3 py-1 rounded-md"
            value={invoiceIdentity.invoicePaymentDate}
            onChange={(e) =>
              setInvoiceIdentity((current) => ({
                ...current,
                invoicePaymentDate: e.target.value,
              }))
            }
          />
        </div>
      </form>
    </div>
  );
};

export default InvoiceDetail;
