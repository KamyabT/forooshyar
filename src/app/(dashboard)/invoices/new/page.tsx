"use client";

import BusinessBox from "@/components/invoice/BusinessBox";
import CustomerBox from "@/components/invoice/CustomerBox";
import InvoiceDetail from "@/components/invoice/InvoiceDetail";
import InvoiceItems from "@/components/invoice/InvoiceItems";
import OperationsBox from "@/components/invoice/OperationsBox";
import CalculationBox from "@/components/invoice/CalculationBox";
import PageHeader from "@/components/ui/pageHeader";
import CommentsBox from "@/components/invoice/CommentsBox";
import { InvoiceItemType, CustomerType } from "@/types";
import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import InvoiceDocument from "@/components/invoice/InvoiceDocument";
import billNumberGenerator from "../../../../components/invoice/utils/billNumberGenerator";

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

  const [customerInfo, setCustomerInfo] = useState<CustomerType>({
    name: "",
    phone: "",
    address: "",
  });

  const [invoiceIdentity, setInvoiceIdentity] = useState({
    billNumber: billNumberGenerator(),
    invoiceCreationDate: "",
    invoicePaymentDate: "",
  });

  function calculateTotalPrice(item: InvoiceItemType): number {
    const subTotal = item.price * item.quantity;
    const discountAmount = subTotal * (item.discount / 100);
    return subTotal - discountAmount;
  }

  function calculateSubTotal(item: InvoiceItemType): number {
    const subTotal = item.price * item.quantity;
    return subTotal;
  }

  function calculateTotalDiscount(item: InvoiceItemType): number {
    return item.price * item.quantity * (item.discount / 100);
  }

  function handleClearItems() {
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

  async function handleGenerateInvoice() {
    const finalData = {
      items: [...items],
      ...customerInfo,
      ...invoiceIdentity,
    };
    const blob = await pdf(<InvoiceDocument data={finalData} />).toBlob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "invoice.pdf";
    a.click();

    URL.revokeObjectURL(url);

    setTimeout(() => {
      handleClearItems();
    }, 1000);
  }

  return (
    <>
      <PageHeader
        title="فاکتور جدید"
        description="اطلاعات فاکتور را تکمیل کنید و فاکتور خود را صادر نمایید"
      />

      <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-5">
        <InvoiceDetail
          invoiceIdentity={invoiceIdentity}
          setInvoiceIdentity={setInvoiceIdentity}
        />
        <CustomerBox customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} />
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
        <OperationsBox
          onClearItems={handleClearItems}
          onGenerateInvoice={handleGenerateInvoice}
        />
        <CalculationBox
          items={items}
          totalPrice={calculateTotalPrice}
          subTotal={calculateSubTotal}
          totalDiscount={calculateTotalDiscount}
        />
        <CommentsBox />
      </section>
      {/* <InvoicePdf data={items} /> */}
    </>
  );
};

export default InvoiceGeneratorPage;
