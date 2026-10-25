export function pricesCalculations(item) {
  console.log(1111);

  //     const subTotal = item.price * item.quantity;
  //     const discountAmount = subTotal * (item.discount / 100);
  //     const totalDiscount = item.price * item.quantity * (item.discount / 100);

  //   return [subTotal , discountAmount , totalDiscount]
}

export function itemCalculation() {
  const subTotal = item.price * item.quantity;
  const discountAmount = subTotal * (item.discount / 100);
  const totalDiscount = item.price * item.quantity * (item.discount / 100);
  return [subTotal, discountAmount, totalDiscount];
}
