import { UserRound, CircleUserRound } from "lucide-react";

export default function InvoiceCustomer({ invoice }) {
  return (
    <div className="flex flex-col bg-background rounded-lg p-4 shadow-md gap-y-4">
      <div className="flex items-center gap-x-2">
        <UserRound />
        <h5 className="text-[18px]">اطلاعات مشتری</h5>
      </div>
      <div className="flex bg-background-third border-1 border-gray-200 p-3 rounded-lg h-full gap-x-3">
        <div className="flex items-center justify-center">
          <CircleUserRound size={52} color="#2a44c6" strokeWidth={0.75} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-2">
            <p className="text-[16px]">نام مشتری:</p>
            <p className="text-[16px]">{invoice.name}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-[16px]">شماره تماس:</p>
            <p className="text-[16px]">{invoice.phone}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-[16px]">آدرس:</p>
            <p className="text-[16px]">{invoice.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
