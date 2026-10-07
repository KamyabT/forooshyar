import { FileCheck, SaveCheck, Trash, Zap } from "lucide-react";

const Operations = () => {
  return (
    <div className=" bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-3 gap-2">
        <Zap />
        <h3>عملیات</h3>
      </div>
      <div className="flex flex-col gap-3">
        <button className="flex justify-center align-center rounded cursor-pointer bg-primary-secondary text-white rounded-md cursor-pointer hover:drop-shadow-md transition-all duration-200 px-5 py-2 gap-2">
          <FileCheck size={20}/>
          <p className="">صدور و دانلود</p>
        </button>
        <button className="flex justify-center align-center rounded cursor-pointer bg-primary-hover rounded-md cursor-pointer hover:drop-shadow-md transition-all duration-200 px-5 py-2 gap-2">
          <SaveCheck size={20}/>
          <p className="">ذخیره پیش‌نویس</p>
        </button>
        <button className="flex justify-center align-center rounded cursor-pointer bg-primary-hover rounded-md cursor-pointer hover:drop-shadow-md transition-all duration-200 px-5 py-2 gap-2">
          <Trash size={20}/>
          <p className="">پاک کردن فرم</p>
        </button>
      </div>
    </div>
  );
};

export default Operations;
