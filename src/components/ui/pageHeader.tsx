import type { PageHeaderProps } from "@/types";


const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <section className="flex items-center justify-between">
      <div>
        <p className="font-bold text-[24px]">{title}</p>
        <span className="font-normal text-[16px]">{description}</span>
      </div>
      <div>
        <p className="font-bold text-[14px]">دوشنبه 23 شهریور 1405</p>
      </div>
    </section>
  );
};

export default PageHeader;
