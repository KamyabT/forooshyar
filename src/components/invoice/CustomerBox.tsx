import { User } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";


/*********Types Start**********/


type CustomerInfoProps = {
    id?: string;
  name: string;
  email?: string;
  phone: string;
  address: string;
}

interface CustomerBoxProps {
  customerInfo: CustomerInfoProps;
  setCustomerInfo: Dispatch<SetStateAction<CustomerInfoProps>>;
}

/*********Types End**********/


const CustomerBox = ({ customerInfo, setCustomerInfo }: CustomerBoxProps) => {

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
            value={customerInfo?.name}
            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
          />
        </div>
        <div className="flex justify-between">
          <label>شماره تلفن</label>
          <input
            type="tel"
            className="w-2/3  border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-300"
            placeholder="تلفن تماس"
            value={customerInfo?.phone}
            onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
          />
        </div>
        <div className="flex justify-between">
          <label>آدرس</label>
          <input
            type="text"
            className="w-2/3  border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-300"
            placeholder="آدرس"
            value={customerInfo?.address}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, address: e.target.value })
            }
          />
        </div>
      </form>
    </div>
  );
};

export default CustomerBox;
