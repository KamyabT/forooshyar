import type { Dispatch, SetStateAction } from "react";
import type { InvoiceItemType } from "@/types/index";
import { calculateTotalPrice } from "@/components/invoice/utils/pricesCalculations";

import { Trash } from "lucide-react";

/*********Types Start**********/
type itemsProps = {
  discount: number;
  id: string;
  price: number;
  product: string;
  productDescription: string;
  quantity: number;
};
interface InvoiceItemProps {
  items: itemsProps[];
  item: itemsProps;
  setItems: Dispatch<SetStateAction<InvoiceItemType[]>>;
  onDelete: (id: string) => void;
}

/*********Types End**********/

const InvoiceItem = ({ items, item, setItems, onDelete }: InvoiceItemProps) => {
  return (
    <div className="grid grid-cols-[25px_1fr_1fr_100px_200px_100px_100px_100px]">
      <div className="flex items-center justify-center bg-surface-secondary">
        {items.findIndex((currentItem) => currentItem.id === item.id) + 1}
      </div>
      <div className="py-2 mx-2">
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:border-blue-300"
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
      <div className="py-2 mx-2">
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
      <div className="py-2 mx-2">
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
      <div className="py-2 mx-2">
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
      <div className="py-2 mx-2">
        <input
          className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-blue-300"
          type="number"
          placeholder="تخفیف"
          value={item.discount}
          onChange={(e) => {
            const discount =
              +e.target.value > 100 ? 100 : +e.target.value < 0 ? 0 : +e.target.value;

            setItems((currentItems) =>
              currentItems.map((currentItem) =>
                currentItem.id === item.id ? { ...currentItem, discount } : currentItem,
              ),
            );
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-surface-secondary w-full">
        {item.discount >= 100 ? 0 : calculateTotalPrice(item)}
      </div>
      <div
        className="flex items-center justify-center bg-surface-secondary w-full hover:text-red-500 cursor-pointer"
        onClick={() => onDelete(item.id)}
      >
        <Trash size={20} />
      </div>
    </div>
  );
};

export default InvoiceItem;
