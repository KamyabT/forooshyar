import type { InvoiceItemType } from "@/types";

export function calculateTotalPrice(item: InvoiceItemType): number {
  const subTotal = item.price * item.quantity;
  const discountAmount = subTotal * (item.discount / 100);
  return subTotal - discountAmount;
}

export function calculateSubTotal(item: InvoiceItemType): number {
  const subTotal = item.price * item.quantity;
  return subTotal;
}

export function calculateTotalDiscount(item: InvoiceItemType): number {
  return item.price * item.quantity * (item.discount / 100);
}
