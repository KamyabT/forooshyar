import { StickyNote } from "lucide-react";

const CommentsBox = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center gap-2 mb-3">
        <StickyNote />
        <h3>توضیحات</h3>
      </div>
      <form action="">
        <textarea 
          className="w-full h-32 p-3 border border-gray-100 rounded-lg bg-surface-secondary focus:outline-none focus:border-blue-300" 
          placeholder="توضیحات اضافی در فاکتور (اختیاری)..."
        ></textarea>
      </form>
    </div>
  );
};

export default CommentsBox;