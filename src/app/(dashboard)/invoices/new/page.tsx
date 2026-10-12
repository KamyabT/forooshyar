"use client";

import BusinessBox from "@/components/invoice/BusinessBox";
import CustomerBox from "@/components/invoice/CustomerBox";
import InvoiceDetail from "@/components/invoice/InvoiceDetail";
import InvoiceItems from "@/components/invoice/InvoiceItems";
import OperationsBox from "@/components/invoice/OperationsBox";
import CalculationBox from "@/components/invoice/CalculationBox";
import PageHeader from "@/components/ui/pageHeader";
import CommentsBox from "@/components/invoice/CommentsBox";
import { InvoiceItemType } from "@/types";
import { useState } from "react";

const InvoiceGeneratorPage = () => {
  const [items, setItems] = useState<InvoiceItemType[]>([
    {
      id: crypto.randomUUID(),
      product: "",
      productDescription: "",
      quantity: 1,
      price: 0,
      discount: 0,
    },
  ]);

  function calculateTotalPrice(item: InvoiceItemType): number {
    const subTotal = item.price * item.quantity;
    const discountAmount = subTotal * (item.discount / 100);

    return subTotal - discountAmount;
  }

  function handleClearItems() {
    console.log("cleard");
    setItems([
      {
        id: crypto.randomUUID(),
        product: "",
        productDescription: "",
        quantity: 1,
        price: 0,
        discount: 0,
      },
    ]);
  }

  return (
    <>
      <PageHeader
        title="فاکتور جدید"
        description="اطلاعات فاکتور را تکمیل کنید و فاکتور خود را صادر نمایید"
      />
      <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-5">
        <InvoiceDetail />
        <CustomerBox />
        <BusinessBox />
      </section>
      <section>
        <InvoiceItems
          items={items}
          setItems={setItems}
          totalPrice={calculateTotalPrice}
        />
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-5">
        <OperationsBox onClearItems={handleClearItems} />
        <CalculationBox items={items} totalPrice={calculateTotalPrice} />
        <CommentsBox />
      </section>
    </>
  );
};

export default InvoiceGeneratorPage;
