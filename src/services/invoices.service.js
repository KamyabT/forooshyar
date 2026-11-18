import api from "../lib/axios";

export function getInvoices() {
  return api.get("/invoices/records?expand=items");
}

export function getInvoice(invoiceId) {
  return api.get(`/invoices/records/${invoiceId}`, {
    params: {
      expand: "items",
    },
  });
}

export function createInvoice(invoice) {
  return api.post(`/invoices/records`, {
    body: {
      id: "",
      invoiceNumber: "",
      customerName: "",
      customerLastName: "",
      invoiceStatus: "",
      invoiceCreationDate: "",
      invoicePaymentDate: "",
      phone: "",
      address: "",
      user: "",
      items: "",
    },
  });
}
