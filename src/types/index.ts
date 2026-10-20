import type { LucideIcon } from "lucide-react";

export interface CustomerType {
  id?: string;
  name: string;
  email?: string;
  phone: string;
  address: string;
}



/************Refactored until top************/
export interface InvoiceItem {
  id: string;
  product: string;
  quantity: number;
  price: number;
  total: number;
}

export type InvoiceStatus = "draft" | "sent" | "paid" | "cancelled";

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: string;
  items: InvoiceItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  status: InvoiceStatus;
  date: string;
}

export type StatsCardProps = {
  title: string;
  value: string;
  color: string;
  IconBg: string;
  Icon: LucideIcon;
};



export type PageHeaderProps = {
  title: string;
  description: string;
};



export interface InvoiceItemType {
  id: string;
  product: string;
  productDescription: string;
  quantity: number;
  price: number;
  discount: number;
}



