import style from "./AppSidebar.module.css";
import {
  House,
  FilePlusCorner,
  Layers,
  Users,
  ShelvingUnit,
  ChartColumnIncreasing,
  Settings,
  Info,
  LogOut,
} from "lucide-react";

const AppSidebar = () => {
  return (
    <aside
      className={`${style.aside} flex h-screen flex-col bg-surface-secondary px-4 py-6 text-sm font-medium`}
    >
      <div className="mb-5">Logo</div>

      <div className="flex flex-1 flex-col justify-between">
        <nav>
          <ul className="text-text-primary">
            <li className="flex items-center gap-3 p-3 text-[16px]">
              <House size={20} />
              <span>داشبورد</span>
            </li>
            <li className="flex items-center gap-3 p-3 text-[16px]">
              <FilePlusCorner size={20} />
              <span>فاکتور جدید</span>
            </li>
            <li className="flex items-center gap-3 p-3 text-[16px]">
              <Layers size={20} />
              <span>فاکتورها</span>
            </li>
            <li className="flex items-center gap-3 p-3 text-[16px]">
              <Users size={20} />
              <span>مشتریان</span>
            </li>
            <li className="flex items-center gap-3 p-3 text-[16px]">
              <ShelvingUnit size={20} />
              <span>محصولات</span>
            </li>
            <li className="flex items-center gap-3 p-3 text-[16px]">
              <ChartColumnIncreasing size={20} />
              <span>گزارش ها</span>
            </li>
            <li className="flex items-center gap-3 p-3 text-[16px]">
              <Settings size={20} />
              <span>تنظیمات</span>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li className="flex items-center gap-3 p-3 text-[16px]">
              <Info size={20} />
              <span>پشتیبانی</span>
            </li>
            <li className="flex items-center gap-3 p-3 text-[16px]">
              <LogOut size={20} />
              <span>خروج</span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
