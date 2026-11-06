import { notFound } from "next/navigation";

const invoices = [
  {
    id: 1,
    address: "aaaaa",
    billNumber: "FYB-2026103-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "ssss",
    phone: "09123456789",
    items: [
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    address: "sssss",
    billNumber: "FYB-2026103-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "ssss",
    phone: "09123456789",
    items: [
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    address: "ddddd",
    billNumber: "FYB-2026103-1451",
    invoiceCreationDate: "2026-11-11",
    invoicePaymentDate: "2026-11-12",
    name: "ssss",
    phone: "09123456789",
    items: [
      {
        discount: 0,
        id: "8f0e0bd7-bd07-4463-bb1c-3eaa3a71be66",
        price: 1000,
        product: "asdsa",
        productDescription: "asdsad",
        quantity: 1,
      },
    ],
  },
];

export default async function page({ params }) {
  const { invoiceId } = await params;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(invoiceId);

  const invoice = invoices.find((invoice) => {
    return invoice.id === Number(invoiceId);
  });

  if (!invoice) {
    notFound();
  }

  console.log(invoice);
  return (
    <div>
      <p>فاکتور شماره 2</p>
      <div>
        <p>{invoice.id}</p>
        <p>{invoice.address}</p>
        <p>{invoice.name}</p>
        <p>{invoice.billNumber}</p>
        <p>{invoice.invoiceCreationDate}</p>
        <p>{invoice.invoicePaymentDate}</p>
        <p>{invoice.phone}</p>
        {invoice?.items.map((item) => {
          return (
            <div key={invoice.id}>
              <p>{item.id}</p>
              <p>{item.price}</p>
              <p>{item.product}</p>
              <p>{item.quantity}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
