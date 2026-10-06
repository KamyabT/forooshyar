import BusinessBox from "@/components/invoice/BusinessBox";
import CustomerBox from "@/components/invoice/CustomerBox";
import InvoiceDetail from "@/components/invoice/InvoiceDetail";
import InvoiceItems from "@/components/invoice/InvoiceItems";
import PageHeader from "@/components/ui/pageHeader";

const InvoiceGeneratorPage = () => {
  return (
    <>
      <PageHeader
        title="فاکتور جدید"
        description="اطلاعات فاکتور را تکمیل کنید و فاکتور خود را صادر نمایید"
      />
      <section className="grid grid-cols-3 gap-4 my-5">
        <InvoiceDetail />
        <CustomerBox/>
        <BusinessBox />
      </section>
      <section>
        <InvoiceItems />
      </section>
      <section className="grid grid-cols-[2fr_4fr] gap-4 my-5">
        <div className="grid"></div>
        <div className="grid"></div>
      </section>
    </>
  );
};

export default InvoiceGeneratorPage;
