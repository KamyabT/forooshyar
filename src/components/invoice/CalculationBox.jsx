import { Calculator } from "lucide-react";

const Calculation = ({ totalPrice, items }) => {
  const InvoiceTotal = items.reduce((sum, item) => sum + totalPrice(item), 0);

  return (
    <div className=" bg-white p-4 rounded-lg shadow">
      <div className="flex items-center gap-2 mb-3">
        <Calculator />
        <h3>جمع کل</h3>
      </div>
      <div>
        <div className="flex justify-between border-b-1 border-solid border-gray-100 p-2">
          <p>جمع مبلغ</p>
          <p>0 تومان</p>
        </div>
        <div className="flex justify-between border-b-1 border-solid border-gray-100 p-2">
          <p>مجموع تخفیف</p>
          <p>0 تومان</p>
        </div>
        <div className="flex justify-between border-b-1 border-solid border-gray-100 p-2">
          <p>مالیات (%)</p>
          <p>0 تومان</p>
        </div>
        <div className="flex justify-between border-b-1 border-solid border-gray-100 p-2">
          <p>مبلغ نهایی</p>
          <p>{InvoiceTotal} تومان</p>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
