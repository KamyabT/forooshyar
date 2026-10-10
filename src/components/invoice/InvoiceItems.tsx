import { Box, Trash } from "lucide-react";

const InvoiceItems = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow ">
      <div className="flex items-center mb-3 gap-2">
        <Box />
        <h3>اطلاعات فاکتور</h3>
      </div>
      <div className="grid grid-cols-[25px_1fr_1fr_100px_200px_100px_100px_100px] bg-surface-secondary rounded px-2 py-1 gap-2">
        <div className="flex items-center justify-center">#</div>
        <div className="flex items-center justify-center">محصول/خدمت</div>
        <div className="flex items-center justify-center">توضیحات</div>
        <div className="flex items-center justify-center">تعداد</div>
        <div className="flex items-center justify-center">قیمت واحد</div>
        <div className="flex items-center justify-center">تخفیف(%)</div>
        <div className="flex items-center justify-center">جمع کل</div>
        <div className="flex items-center justify-center">عملیات</div>
      </div>
      <div className="grid grid-cols-[25px_1fr_1fr_100px_200px_100px_100px_100px]">
        <div className="flex items-center justify-center bg-surface-secondary">1</div>
        <div className="pt-2">
          <input
            className="border border-gray-300 text-left px-3 py-1 rounded-md w-full"
            type="text"
            placeholder="choose product"
          />
        </div>
        <div className="pt-2">
          <input
            className="border border-gray-300 text-left px-3 py-1 rounded-md w-full"
            type="text"
            placeholder="comment"
          />
        </div>
        <div className="pt-2">
          <input
            className="border border-gray-300 text-left px-3 py-1 rounded-md w-full"
            type="number"
            placeholder="qauntity"
          />
        </div>
        <div className="pt-2">
          <input
            className="border border-gray-300 text-left px-3 py-1 rounded-md w-full"
            type="number"
            placeholder="fee"
          />
        </div>
        <div className="pt-2">
          <input
            className="border border-gray-300 text-left px-3 py-1 rounded-md w-full"
            type="number"
            placeholder="discount"
          />
        </div>
        <div className="flex items-center justify-center bg-surface-secondary w-full">
          0
        </div>
        <div className="flex items-center justify-center bg-surface-secondary w-full">
          <Trash size={20} />
        </div>
      </div>
    </div>
  );
};

export default InvoiceItems;
