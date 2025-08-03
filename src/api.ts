import type { FormData, InvoiceResponse } from "./types/InvoiceTrackerTypes";

export const createInvoice = async (data: FormData): Promise<InvoiceResponse> => {
  const response = await fetch('http://localhost:3000/api/invoices', {
    method: 'POST',
    //headers tell the server what type of data is sent
    //data is in JSON format so it knows how to parse it properly
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response.json();
}

export const getAllInvoices = async (): Promise<InvoiceResponse[]> => {
  //This does not send data, so the headers are not needed
  const response = await fetch('http://localhost:3000/api/invoices', {
    method: 'GET',
  })
  return response.json();
}

export const getInvoice = async (id: number): Promise<InvoiceResponse> => {
  const response = await fetch(`http://localhost:3000/api/invoices/${id}`, {
    method: 'GET',
  })
  return response.json();
}