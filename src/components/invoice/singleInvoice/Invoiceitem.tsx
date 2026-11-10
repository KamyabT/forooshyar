import React from "react";

export default function Invoiceitem({ item, itemIndex }) {
  return (
    <div className="grid grid-cols-[50px_repeat(5,minmax(0,1fr))] border-b-1 border-gray-200">
      <div className="flex items-center justify-center bg-surface-secondary">
        {/* {items.findIndex((currentItem) => currentItem.id === item.id) + 1}1 */}
        {itemIndex + 1}
      </div>
      <div className="py-2 mx-2">
        <p>{item.product}</p>
        {/* <input
          type="text"
          className="w-full rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:border-blue-300"
          placeholder="نام محصول"
        /> */}
      </div>
      <div className="py-2 mx-2">
        <p>{item.quantity}</p>
      </div>
      <div className="py-2 mx-2">
        <p>{item.price}</p>
      </div>
      <div className="py-2 mx-2">
        <p>{item.discount}</p>
      </div>
      <div className="py-2 mx-2">
        <p>final</p>
      </div>
      <div className="flex items-center justify-center bg-surface-secondary w-full"></div>
      <div className="flex items-center justify-center bg-surface-secondary w-full hover:text-red-500 cursor-pointer"></div>
    </div>
  );
}
