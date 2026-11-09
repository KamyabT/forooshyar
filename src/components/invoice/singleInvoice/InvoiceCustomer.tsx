import { UserRound, CircleUserRound } from "lucide-react";


export default function InvoiceCustomer({ invoice }) {
  return (
    <div className="flex flex-col bg-background rounded-lg p-4 shadow-md gap-y-4">
      <div className="flex items-center gap-x-2">
        <UserRound />
        <h5>اطلاعات مشتری</h5>
      </div>
      <div className="flex bg-background-third border-1 border-gray-200 p-3 rounded-lg h-full">
        <div className="flex items-center justify-center">
          <CircleUserRound size={52} color="#2a44c6" strokeWidth={0.75} />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <p>نام مشتری:</p>
            <p>{invoice.name}</p>
          </div>
          <div className="flex">
            <p>شماره تماس:</p>
            <p>{invoice.phone}</p>
          </div>
          <div className="flex">
            <p>آدرس:</p>
            <p>{invoice.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
