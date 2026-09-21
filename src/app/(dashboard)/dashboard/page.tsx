import QuickActions from "@/components/dashboard/QuickActions";
import StatsCard from "@/components/dashboard/StatsCard";
import SalesChart from "@/components/dashboard/SalesChart";

import { Users, ReceiptText, StickyNoteX, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <section className="flex items-center justify-between">
        <div>
          <p className="font-bold text-[24px]">خوش آمدید، کامیاب!</p>
          <span className="font-normal text-[16px]">در اینجا خلاصه از وضعیت کسب و کارتان را میبینید</span>
        </div>
        <div>
          <p className="font-bold text-[14px]">دوشنبه 23 شهریور 1405</p>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-4 my-5">
        <StatsCard
          title="مجموع فروش این ماه"
          value="10,000,000 تومان"
          Icon={ReceiptText}
          color="#7c3aed"
          IconBg="#e8dffd"
        />
        <StatsCard
          title="تعداد مشتریان"
          value="50"
          Icon={Users}
          color="#0611d7"
          IconBg="#dce8fe"
        />
        <StatsCard
          title="تعداد فاکتورهای این ماه"
          value="25"
          Icon={ShoppingCart}
          color="#16a34a"
          IconBg="#d6f4e4"
        />
        <StatsCard
          title="فاکتورهای معوق"
          value="3"
          Icon={StickyNoteX}
          color="#d97706"
          IconBg="#fef3da"
        />
      </section>
      <section className="grid grid-cols-[2fr_4fr] gap-4 my-5">
        <div className="grid">
          <QuickActions />
        </div>
        <div className="grid">
          <SalesChart />
        </div>
      </section>
      <section>
        <div>latest customers</div>
        <div>latest invoices</div>
      </section>
    </>
  );
}
