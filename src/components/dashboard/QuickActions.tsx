import Link from "next/link";

import { FilePlusCorner, Layers, ShelvingUnit, UserPlus } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="bg-background rounded-lg p-4 shadow-md">
      <h2 className="text-[18px]">اقدامات سریع</h2>
      <div className="flex flex-col justify-between gap-x-4 gap-y-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/customers/new"
            className="flex flex-col align-center justify-center bg-primary-hover px-3 py-4 rounded-lg cursor-pointer hover:drop-shadow-lg transition-all duration-200"
          >
            <div className="flex justify-center mb-2">
              <UserPlus size={32} color="#0611d7" />
            </div>
            <p className="text-primary text-center font-bold">افزودن مشتری</p>
            <p className="text-center">ثبت مشتری جدید</p>
          </Link>
          <Link
            href="/invoices/new"
            className="flex flex-col align-center justify-center bg-primary-hover px-3 py-4 rounded-lg cursor-pointer hover:drop-shadow-lg transition-all duration-200"
          >
            <div className="flex justify-center mb-2">
              <FilePlusCorner size={32} color="#16a34a" />
            </div>
            <p className="text-success text-center font-bold">فاکتور جدید</p>
            <p className="text-center">ساخت فاکتور فروش</p>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/invoices"
            className="flex flex-col align-center justify-center bg-primary-hover px-3 py-4 rounded-lg cursor-pointer hover:drop-shadow-lg transition-all duration-200"
          >
            <div className="flex justify-center mb-2">
              <Layers size={32} color="#0611d7" />
            </div>
            <p className="text-primary text-center font-bold">مشاهده فاکتورها</p>
            <p className="text-center">لیست همه فاکتورها</p>
          </Link>
          <Link
            href="/products"
            className="flex flex-col align-center justify-center bg-primary-hover px-3 py-4 rounded-lg cursor-pointer hover:drop-shadow-lg transition-all duration-200"
          >
            <div className="flex justify-center mb-2">
              <ShelvingUnit size={32} color="#0611d7" />
            </div>
            <p className="text-primary text-center font-bold">مدیریت محصولات</p>
            <p className="text-center">مشاهده و ویرایش</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
