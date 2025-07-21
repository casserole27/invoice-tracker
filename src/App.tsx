import { useState } from 'react';
import './App.css'
import InvoiceInput from './Components/InvoiceInput/InvoiceInput'
import ServiceInput from './Components/ServiceInput';
import InvoiceDisplay from './Components/InvoiceDisplay';
import type { FormData, InvoiceData } from './types/InvoiceTrackerTypes';


function App() {
  // Form state - updates as user types
  const [formData, setFormData] = useState<FormData>({
    invoiceDate: '',
    company: { name: '', email: '', phone: '' },
    customer: { name: '', email: '', phone: '' },
    services: { 
      id: Date.now(),
      serviceDate: '',
      description: '',
      numberOfHours: null,
      hourlyRate: null,
      serviceAmount: null,
    },
    notes: '' 
  });

  // Invoice state - only updates when "Create Invoice" or "Save" is clicked
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    invoiceNumber: 0,
    invoiceDate: '',
    company: { name: '', email: '', phone: '' },
    customer: { name: '', email: '', phone: '' },
    services: [],
    notes: '',
    // total: null
  });

  return (
    <>
      <InvoiceInput 
        formData={formData} 
        setFormData={setFormData}
        setInvoiceData={setInvoiceData}
      />
      <ServiceInput 
        formData={formData}
        setFormData={setFormData}
        setInvoiceData={setInvoiceData}
      />
      <InvoiceDisplay
        invoiceData={invoiceData}
        setInvoiceData={setInvoiceData}
      />
    </>
  );
}

export default App
