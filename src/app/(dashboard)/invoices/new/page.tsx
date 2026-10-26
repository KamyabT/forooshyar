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
  const [items, setItems] = useState<InvoiceItemType[]>([]);

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

  function customerValidation(): string | null {
    if (
      customerInfo.name.trim() === "" ||
      customerInfo.phone.trim() == "" ||
      customerInfo.address.trim() == ""
    ) {
      return "لطفا اطلاعات مشتری را تکمیل کنید";
    } else {
      return null;
    }
  }

  function invoiceValidation(): string | null {
    if (
      invoiceIdentity.billNumber.trim() === "" ||
      invoiceIdentity.invoiceCreationDate.trim() === "" ||
      invoiceIdentity.invoicePaymentDate.trim() === ""
    ) {
      return "لطفا اطلاعات فاکتور را تکمیل کنید";
    }
    if (invoiceIdentity.invoiceCreationDate > invoiceIdentity.invoicePaymentDate) {
      return "تاریخ پرداخت فاکتور نمی‌تواند قبل از تاریخ صدور فاکتور باشد";
    }
    return null;
  }

  function itemLengthValidation(): string | null {
    if (items.length === 0) {
      return "لطفا حداقل یک محصول اضافه کنید";
    } else {
      return null;
    }
  }

  function phoneValidation(): boolean {
    const isMobile = /^09\d{9}$/.test(customerInfo.phone.trim());
    const isLandline = /^0\d{10}$/.test(customerInfo.phone.trim());
    return isMobile || isLandline;
  }

  function invoiceItemsValidation(): string | null {
    if (items.some((item) => item.discount < 0 || item.discount > 100)) {
      return "تخفیف نمیتواند منفی یا بیشتر از 100 درصد باشد";
    }
    if (items.some((item) => item.product.trim() === "")) {
      return "لطفا نام محصول را وارد کنید";
    }
    if (items.some((item) => item.price <= 0)) {
      return "قیمت محصول نمی‌تواند صفر یا منفی باشد";
    }
    if (items.some((item) => item.quantity <= 0)) {
      return "تعداد محصول نمی‌تواند صفر یا منفی باشد";
    } else {
      return null;
    }
  }

  async function handleGenerateInvoice() {
    /***********Not Empty Check**********/
    const itemLengthValidationCheck: string | null = itemLengthValidation();
    const customerValidationCheck: string | null = customerValidation();
    const invoiceValidationCheck: string | null = invoiceValidation();
    const invoiceItemsValidationCheck: string | null = invoiceItemsValidation();

    if (customerValidationCheck !== null) return alert(customerValidationCheck);
    if (invoiceValidationCheck !== null) return alert(invoiceValidationCheck);
    if (itemLengthValidationCheck !== null) return alert(itemLengthValidationCheck);

    // /***********Phone Check**********/
    const phoneValidationCheck: boolean = phoneValidation();
    console.log("phoneValidationCheck", phoneValidationCheck);
    if (!phoneValidationCheck)
      return alert(
        "لطفا شماره تلفن را به درستی وارد کنید. (مثال: 09123456789 یا 02111223344)",
      );

    // /***********Invoice Items Check**********/

    if (invoiceItemsValidationCheck !== null) {
      return alert(invoiceItemsValidationCheck);
    }
    /*********************/

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
        />
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-5">
        <OperationsBox
          onClearItems={handleClearItems}
          onGenerateInvoice={handleGenerateInvoice}
        />
        <CalculationBox items={items} />
        <CommentsBox />
      </section>
      {/* <InvoicePdf data={items} /> */}
    </>
  );
};

export default InvoiceGeneratorPage;
