import { Calculator } from "lucide-react";

const Calculation = () => {
  return (
    <div className=" bg-white p-4 rounded-lg shadow">
      <div className="flex items-center gap-2 mb-3">
        <Calculator />
        <h3>جمع کل</h3>
      </div>
      <div>
        <div className="flex justify-between">
          <p>جمع مبلغ</p>
          <p>0 تومان</p>
        </div>
        <div className="flex justify-between">
          <p>مجموع تخفیف</p>
          <p>0 تومان</p>
        </div>
        <div className="flex justify-between">
          <p>مالیات</p>
          <p>0 تومان</p>
        </div>
        <div className="flex justify-between">
          <p>مبلغ نهایی</p>
          <p>0 تومان</p>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
