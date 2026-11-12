export default function Invoiceitem({ item, itemIndex }) {
  console.log(item, 6666);

  const totalItemPrice = item.price * item.quantity

  return (
    <div className="grid grid-cols-[50px_repeat(5,minmax(0,1fr))] border-b-1 border-gray-200">
      <div className="flex items-center justify-center bg-surface-secondary">
        {itemIndex + 1}
      </div>
      <div className="py-2 mx-2">
        <p className="text-[16px] py-1 font-normal">{item.product}</p>
      </div>
      <div className="py-2 mx-2">
        <p className="text-[16px] py-1 font-normal">
          {item.quantity.toLocaleString("fa-IR")}
        </p>
      </div>
      <div className="py-2 mx-2">
        <p className="text-[16px] py-1 font-normal">
          {item.price.toLocaleString("fa-IR")}
        </p>
      </div>
      <div className="py-2 mx-2">
        <p className="text-[16px] py-1 font-normal">
          {item.discount.toLocaleString("fa-IR")}
        </p>
      </div>
      <div className="py-2 mx-2">
        <p className="text-[16px] py-1 font-normal">{(totalItemPrice).toLocaleString("fa-IR")}</p>
      </div>
    </div>
  );
}
