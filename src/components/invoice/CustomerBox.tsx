import { User } from "lucide-react";

const CustomerBox = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-3 gap-2">
        <User />
        <h3>اطلاعات فاکتور</h3>
      </div>
      <form className="flex flex-col gap-2" action="">
        <div className="flex justify-between">
          <label>انتخاب مشتری</label>
          <input
            type="text"
            className="w-2/3  border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-300"
            placeholder="انتخاب مشتری"
          />
        </div>
        <div className="flex justify-between">
          <label>شماره تلفن</label>
          <input
            type="number"
            className="w-2/3  border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-300"
            placeholder="تلفن تماس"
          />
        </div>
        <div className="flex justify-between">
          <label>آدرس</label>
          <input
            type="text"
            className="w-2/3  border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-300"
            placeholder="آدرس"
          />
        </div>
      </form>
    </div>
  );
};

export default CustomerBox;
