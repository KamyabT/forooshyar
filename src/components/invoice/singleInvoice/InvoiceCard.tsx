export default function InvoiceCard({ title , Icon }) {
  return (
    <div className="flex justify-between items-center bg-background rounded-lg p-4 shadow-md">
      <div className="flex flex-col gap-y-2">
        <h5 className="text-[16px]">{title}</h5>
        <p className="text-[24px]">1400000</p>
        <p className="text-[16px]">تومان</p>
      </div>
      <div className="bg-blue-100 p-4 rounded-xl">
        <Icon size={30} color="#0651ff"/>
      </div>
    </div>
  );
}
