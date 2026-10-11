import { Trash } from "lucide-react";

const InvoiceItem = ({ item, setItems }) => {
  console.log(item, 6666);

  return (
    <div className="grid grid-cols-[25px_1fr_1fr_100px_200px_100px_100px_100px] mb-4">
      <div className="flex items-center justify-center bg-surface-secondary">1</div>
      <div className="pt-2 mx-2">
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:border-blue-300 "
          placeholder="نام محصول"
          value={item.product}
          onChange={(event) => {
            const productName = event.target.value;

            setItems((currentItems) =>
              currentItems.map((currentItem) =>
                currentItem.id === item.id
                  ? { ...currentItem, product: productName }
                  : currentItem,
              ),
            );
          }}
        />
      </div>
      <div className="pt-2 mx-2">
        <input
          className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-blue-300"
          type="text"
          placeholder="توضیحات محصول"
          onChange={(e) => {
            const description = e.target.value;

            setItems((currentItems) =>
              currentItems.map((currentItem) =>
                currentItem.id === item.id
                  ? { ...currentItem, productDescription: description }
                  : currentItem,
              ),
            );
          }}
        />
      </div>
      <div className="pt-2 mx-2">
        <input
          className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-blue-300"
          type="number"
          placeholder="qauntity"
          value={item.quantity}
          onChange={(e) => {
            const quant = +e.target.value;

            setItems((currentItems) =>
              currentItems.map((currentItem) =>
                currentItem.id === item.id
                  ? { ...currentItem, quantity: quant }
                  : currentItem,
              ),
            );
          }}
        />
      </div>
      <div className="pt-2 mx-2">
        <input
          className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-blue-300"
          type="number"
          placeholder="fee"
          value={item.price}
          onChange={(e) => {
            const basePrice = +e.target.value;

            setItems((currentItems) =>
              currentItems.map((currentItem) =>
                currentItem.id === item.id
                  ? { ...currentItem, price: basePrice }
                  : currentItem,
              ),
            );
          }}
        />
      </div>
      <div className="pt-2 mx-2">
        <input
          className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-blue-300"
          type="number"
          placeholder="تخفیف"
          value={item.discount}
          onChange={(e) => {
            const discount = +e.target.value;

            setItems((currentItems) =>
              currentItems.map((currentItem) =>
                currentItem.id === item.id ? { ...currentItem, discount } : currentItem,
              ),
            );
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-surface-secondary w-full">0</div>
      <div className="flex items-center justify-center bg-surface-secondary w-full">
        <Trash size={20} />
      </div>
    </div>
  );
};

export default InvoiceItem;
