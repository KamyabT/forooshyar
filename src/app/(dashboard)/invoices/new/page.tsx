import BusinessBox from "@/components/invoice/BusinessBox";
import CustomerBox from "@/components/invoice/CustomerBox";
import InvoiceDetail from "@/components/invoice/InvoiceDetail";
import InvoiceItems from "@/components/invoice/InvoiceItems";
import OperationsBox from "@/components/invoice/OperationsBox";
import CalculationBox from "@/components/invoice/CalculationBox";
import PageHeader from "@/components/ui/pageHeader";
import CommentsBox from "@/components/invoice/CommentsBox";

const InvoiceGeneratorPage = () => {
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
        <InvoiceItems />
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-5">
        <OperationsBox />
        <CalculationBox />
        <CommentsBox />
      </section>
    </>
  );
};

export default InvoiceGeneratorPage;
