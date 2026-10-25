"use client";

import { InvoiceItemType } from "@/types";
import type { Dispatch, SetStateAction } from "react";
import InvoiceItem from "./invoiceItem";
import { Box } from "lucide-react";




type itemsProps = {
  discount: number;
  id: string;
  price: number;
  product: string;
  productDescription: string;
  quantity: number;
};

type totalCalculationFn = (item:itemsProps) => number


interface InvoiceItemsProps {
  items: itemsProps[];
  setItems: Dispatch<SetStateAction<InvoiceItemType[]>>;
  // totalPrice: (item: InvoiceItemType) => number;
  totalPrice: totalCalculationFn
}

const InvoiceItems = ({ items, setItems, totalPrice }: InvoiceItemsProps) => {
  console.log(items, "items in invoiceItems");
  function handleAddNewItem() {
    const newItem: InvoiceItemType = {
      id: crypto.randomUUID(),
      product: "",
      productDescription: "",
      quantity: 1,
      price: 0,
      discount: 0,
    };
    setItems((currentItems) => [...currentItems, newItem]);
  }

  function handleDelete(id: string) {
    setItems((currentItems) =>
      currentItems.filter((currentItem) => currentItem.id !== id),
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow ">
      <div className="flex items-center mb-3 gap-2">
        <Box />
        <h3>اطلاعات فاکتور</h3>
      </div>
      <div className="grid grid-cols-[25px_1fr_1fr_100px_200px_100px_100px_100px] bg-surface-secondary rounded px-2 py-1 gap-2">
        <div className="flex items-center justify-center">#</div>
        <div className="flex items-center justify-center">محصول/خدمت</div>
        <div className="flex items-center justify-center">توضیحات</div>
        <div className="flex items-center justify-center">تعداد</div>
        <div className="flex items-center justify-center">قیمت واحد</div>
        <div className="flex items-center justify-center">تخفیف(%)</div>
        <div className="flex items-center justify-center">جمع کل</div>
        <div className="flex items-center justify-center">عملیات</div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-4 text-muted-foreground">
          هیچ آیتمی اضافه نشده است.
        </div>
      ) : items.map((item) => (
        <InvoiceItem
          item={item}
          setItems={setItems}
          key={item.id}
          items={items}
          onDelete={handleDelete}
          totalPrice={totalPrice}

        />
      ))}

      {/* {items.map((item) => (
        <InvoiceItem
          item={item}
          setItems={setItems}
          key={item.id}
          items={items}
          onDelete={handleDelete}
          totalPrice={totalPrice}
        />
      ))} */}
      <div className="flex items-center justify-end mt-4">
        <button
          className="bg-primary-hover px-3 py-2 rounded-lg cursor-pointer hover:drop-shadow-md transition-all duration-200 focus:outline-none"
          onClick={handleAddNewItem}
        >
          + افزودن آیتم جدید
        </button>
      </div>
    </div>
  );
};

export default InvoiceItems;
