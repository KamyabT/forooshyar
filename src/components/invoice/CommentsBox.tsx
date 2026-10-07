import { StickyNote } from "lucide-react";

const CommentsBox = () => {
  return (
    <div className=" bg-white p-4 rounded-lg shadow">
      <div className="flex items-center gap-2 mb-3">
        <StickyNote />
        <h3>توضیحات</h3>
      </div>
      <form action="">
        <input className="border border-red-200" type="textarea" name="" id="" />
      </form>
    </div>
  );
};

export default CommentsBox;
