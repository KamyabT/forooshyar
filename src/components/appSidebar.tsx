import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/img/logo.png";

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
      className={`${style.aside} flex h-screen flex-col bg-surface-secondary px-4 pb-6 pt-2 text-sm font-medium border-l-1 border-gray-300 drop-shadow-sm`}
    >
      <div className="mb-2 flex items-center justify-start">
        <Image src={Logo} alt="Logo" width={175} height={175} />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <nav>
          <ul className="text-text-primary">
            <li className="flex items-center p-3 font-bold text-[16px] rounded-lg hover:bg-primary-hover hover:text-primary">
              <Link className="flex items-center gap-3" href="/dashboard">
                <House size={20} />
                <span>داشبورد</span>
              </Link>
            </li>
            <li className="flex items-center p-3 font-bold text-[16px] rounded-lg hover:bg-primary-hover hover:text-primary">
              <Link className="flex items-center gap-3" href="/invoices/new">
                <FilePlusCorner size={20} />
                <span>فاکتور جدید</span>
              </Link>
            </li>
            <li className="flex items-center p-3 font-bold text-[16px] rounded-lg hover:bg-primary-hover hover:text-primary">
              <Link className="flex items-center gap-3" href="/invoices">
                <Layers size={20} />
                <span>فاکتورها</span>
              </Link>
            </li>
            <li className="flex items-center p-3 font-bold text-[16px] rounded-lg hover:bg-primary-hover hover:text-primary">
              <Link className="flex items-center gap-3" href="/customers">
                <Users size={20} />
                <span>مشتریان</span>
              </Link>
            </li>
            <li className="flex items-center p-3 font-bold text-[16px] rounded-lg hover:bg-primary-hover hover:text-primary">
              <Link className="flex items-center gap-3" href="/products">
                <ShelvingUnit size={20} />
                <span>محصولات</span>
              </Link>
            </li>
            <li className="flex items-center p-3 font-bold text-[16px] rounded-lg hover:bg-primary-hover hover:text-primary">
              <Link className="flex items-center gap-3" href="/reports">
                <ChartColumnIncreasing size={20} />
                <span>گزارش ها</span>
              </Link>
            </li>
            <li className="flex items-center p-3 font-bold text-[16px] rounded-lg hover:bg-primary-hover hover:text-primary">
              <Link className="flex items-center gap-3" href="/settings">
                <Settings size={20} />
                <span>تنظیمات</span>
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li className="flex items-center p-3 font-bold text-[16px] rounded-lg hover:bg-primary-hover hover:text-primary">
              <Link className="flex items-center gap-3" href="/support">
                <Info size={20} />
                <span>پشتیبانی</span>
              </Link>
            </li>
            <li className="flex items-center p-3 font-bold text-[16px] rounded-lg hover:bg-primary-hover hover:text-primary">
              <Link className="flex items-center gap-3" href="/logout">
                <LogOut size={20} />
                <span>خروج</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
