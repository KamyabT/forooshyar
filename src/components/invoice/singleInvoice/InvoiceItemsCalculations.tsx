export default function InvoiceItemsCalculations({ items }: Props) {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="grid grid-cols-[50px_repeat(5,minmax(0,1fr))] rounded-b-md gap-2 px-2 py-3 bg-primary-hover">
      <div className="col-span-4" />

      <div className="font-bold text-[18px]">جمع کل:</div>

      <div className="font-bold text-[18px]">
        {total.toLocaleString("fa-IR")} تومان
      </div>
    </div>
  );
}
