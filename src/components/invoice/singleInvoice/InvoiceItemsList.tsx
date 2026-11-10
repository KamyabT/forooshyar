import React from "react";
import InvoiceItem from "./Invoiceitem";
import { Box } from "lucide-react";

export default function InvoiceItemsList({ invoice }) {
  const items = invoice.items;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2 mb-4">
        <Box />
        <h5 className="text-[18px]">اقلام فاکتور</h5>
      </div>
      <div className="grid grid-cols-[50px_repeat(5,minmax(0,1fr))] bg-surface-secondary rounded px-2 py-1 gap-2">
        <div className="text-[16px] py-2 font-medium">ردیف</div>
        <div className="text-[16px] py-2 font-medium">محصول/خدمت</div>
        <div className="text-[16px] py-2 font-medium">تعداد</div>
        <div className="text-[16px] py-2 font-medium">قیمت واحد (تومان)</div>
        <div className="text-[16px] py-2 font-medium">تخفیف (%)</div>
        <div className="text-[16px] py-2 font-medium">مبلغ کل (تومان)</div>
      </div>
      {items.map((item, index) => {
        return <InvoiceItem item={item} key={invoice.id} itemIndex={index} />;
      })}
    </div>
  );
}
