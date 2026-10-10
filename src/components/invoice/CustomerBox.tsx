import { User } from "lucide-react";

const CustomerBox = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-3 gap-2">
        <User />
        <h3>اطلاعات فاکتور</h3>
      </div>
      <form className="flex flex-col" action="">
        <div className="flex justify-between">
          <label>انتخاب مشتری</label>
          <input type="text" className="border border-gray-300" />
        </div>
        <div className="flex justify-between">
          <label>شماره تلفن</label>
          <input type="number" className="border border-gray-300" />
        </div>
        <div className="flex justify-between">
          <label>آدرس</label>
          <input type="text" className="border border-gray-300" />
        </div>
      </form>
    </div>
  );
};

export default CustomerBox;
