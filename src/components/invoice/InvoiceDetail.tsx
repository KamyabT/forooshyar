import { ReceiptText } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import DatePicker from "../ui/DatePicker";
import gregorian from "react-date-object/calendars/gregorian";

/*********Types Start**********/

type invoiceIdentityProps = {
  billNumber: string;
  invoiceCreationDate: string;
  invoicePaymentDate: string;
};

interface InvoiceDetailProps {
  invoiceIdentity: invoiceIdentityProps;
  setInvoiceIdentity: Dispatch<SetStateAction<invoiceIdentityProps>>;
}

/*********Types End**********/

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
          <DatePicker
            value={invoiceIdentity.invoiceCreationDate}
            inputClass="w-1/2 flex border border-gray-300 text-left px-3 py-1 rounded-md focus:outline-none focus:border-blue-300"
            onChange={(date) =>
              setInvoiceIdentity((current) => ({
                ...current,
                invoiceCreationDate: date
                  ? date.convert(gregorian).format("YYYY-MM-DD")
                  : "",
              }))
            }
          />
        </div>
        <div className="flex justify-between w-full">
          <label htmlFor="dueDate">تاریخ پرداخت</label>
          <input
            type="date"
            id="dueDate"
            className="w-1/2  border border-gray-300 text-left px-3 py-1 rounded-md focus:outline-none focus:border-blue-300"
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
