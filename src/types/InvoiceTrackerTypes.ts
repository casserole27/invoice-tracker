export interface CompanyData {
  name: string;
  email: string;
  phone?: string | null;
}

export interface CustomerData {
  name: string;
  email: string;
  phone?: string | null;
}

export interface ServiceData {
  id: number;
  serviceDate: string;
  description: string;
  numberOfHours?: number | null;
  hourlyRate?: number | null;
  serviceAmount?: number | null;
}

export interface FormData {
  invoiceDate: string;
  company: CompanyData;
  customer: CustomerData;
  services: ServiceData;
  notes?: string
}

export interface InvoiceData {
  invoiceNumber: number | null;
  invoiceDate: string;
  company: CompanyData;
  customer: CustomerData;
  services: ServiceData[];
  notes: string;
  total: number | null;
}

 export interface InvoiceResponse {
    id: number;
    invoiceNumber: number;
    invoiceDate: string;
    company: CompanyData;
    customer: CustomerData;
    services: ServiceData[]; 
    notes: string;
    createdAt: string;
}

