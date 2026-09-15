import style from "./AppSidebar.module.css";

const AppSidebar = () => {
  return (
    <aside className={` ${style.aside} h-screen bg-surface-secondary`}>
      <div className="">Logo</div>
      <div className="flex flex-col justify-between">
        <nav className="">
          <ul className="bg-green-400">
            <li>کامیاب</li>
            <li>فاکتور جدید</li>
            <li>فاکتورها</li>
            <li>مشتریان</li>
            <li>محصولات</li>
            <li>گزارش ها</li>
            <li>تنظیمات</li>
          </ul>
        </nav>
        <nav className="">
          <ul>
            <li>پشتیبانی</li>
            <li>خروج</li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
