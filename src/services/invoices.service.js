import api from "../lib/axios";

export function getInvoices() {
  return api.get("/invoices/records?expand=items");
}
