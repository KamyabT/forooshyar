import React from "react";

export default function InvoiceFilters() {
  return (
    <div className="grid gap-x-3 grid-cols-[3fr_repeat(2,minmax(0,1fr))] mb-3">
      <div>
        <input
          className="border-1 border-gray-200 w-full px-3 py-3 rounded-lg p-4 shadow-md bg-background focus:outline-none focus:border-blue-300"
          type="text"
          name=""
          id=""
          placeholder="جستجو..."
        />
      </div>
      <div>
        <select
          className="border-1 border-gray-200 w-full px-3 py-3 rounded-lg p-4 shadow-md bg-background focus:outline-none focus:border-blue-300"
          name=""
          id=""
        >
          <option value="pending">در انتظار پرداخت</option>
          <option value="canceled">لغو شده</option>
          <option value="rejected">پرداخت نشده</option>
          <option value="paid">پرداخت شده</option>
        </select>
      </div>
      <div>
        <input
          className="border-1 border-gray-200 w-full px-3 py-3 rounded-lg p-4 shadow-md bg-background focus:outline-none focus:border-blue-300"
          type="date"
        />
      </div>
      <div></div>
    </div>
  );
}
