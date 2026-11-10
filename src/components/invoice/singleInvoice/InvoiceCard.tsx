export default function InvoiceCard({ title }) {
  return (
    <div className="flex justify-between items-center bg-background rounded-lg p-4 shadow-md">
      <div className="flex flex-col gap-y-2">
        <h5 className="text-[16px]">{title}</h5>
        <p className="text-[24px]">1400000</p>
        <p className="text-[16px]">تومان</p>
      </div>
      <div>icon</div>
    </div>
  );
}
