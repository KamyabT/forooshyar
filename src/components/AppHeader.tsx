import Image from "next/image";

import { Bell } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="bg-background w-full flex items-center justify-between p-5 drop-shadow-sm border-b-1 border-gray-300">
      <div className="flex">
        <form className="" action="">
          <input className="bg-gray-200 w-100 py-2 px-4 rounded-md outline-none" type="search" placeholder="جستجو در فاکتورها، مشتریان، محصولات"/>
        </form>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <Bell />
        </div>
        <div className="flex gap-3">
          <div>
            <h2>کامیاب تنهایی</h2>
            <p>مدیر حساب</p>
          </div>
          <div className="flex items-center">
            <Image src="/img/profile.png" alt="avatar" width={30} height={30} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
