import StatsCard from "@/components/dashboard/StatsCard";

export default function Dashboard() {
  return (
    <>
      <section className="flex items-center justify-between">
        <div>
          <p>خوش آمدید کامیاب</p>
          <span>در اینجا خلاصه از وضعیت کسب و کارتان را میبینید</span>
        </div>
        <div>دوشنبه 23 شهریور 1405</div>
      </section>
      <section className="flex">
        <StatsCard/>
        <StatsCard/>
        <StatsCard/>
        <StatsCard/>
      </section>
      <section>
        <div>quick action</div>
        <div>chart</div>
      </section>
      <section>
        <div>latest customers</div>
        <div>latest invoices</div>
      </section>
    </>
  );
}
