import CompanyInfoForm from "./CompanyInfoForm";
import CustomerInfoForm from "./CustomerInfoForm";
import type { FormData, InvoiceData } from "../../types/InvoiceTrackerTypes";

interface InvoiceCreatorProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export type Section = 'company' | 'customer';

const InvoiceInput = ({ 
  formData,
  setFormData,
  setInvoiceData,
}: InvoiceCreatorProps) => {
 
  const handleInputChange = (
    field: string, 
    value: string, 
    section?: Section
  ): void => {
    if (section) {
       setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const createInvoice = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let nextId = 1;
    
    //TODO
    // const response = await api.post('/invoices', {
    //   company: formData.company,
    //   customer: formData.customer,
    //   invoiceDate: formData.invoiceDate,
    // });
    
    setInvoiceData(prev => ({
      ...prev,
      invoiceNumber: 0,
      invoiceDate: formData.invoiceDate,
      company: formData.company,
      customer: formData.customer,
    }));

    setFormData(prev => ({
      ...prev,
      invoiceNumber: nextId++,
      company: { name: '', email: '', phone: '' },
      customer: { name: '', email: '', phone: '' },
    }));
  };

  return (
    <form onSubmit={createInvoice}>    
      <div className="title-container">
        <h1 className="text-xl font-bold capitalize text-[var(--charcoal)] dark:text-[var(--txt-white)] md:text-3xl">invoice tracker</h1>
        <input 
          type="date"
          value={formData.invoiceDate}
          onChange={(e) => handleInputChange('invoiceDate', e.target.value)}
        />
      </div>
      <CompanyInfoForm 
        formData={formData}
        onChange={handleInputChange}
      />
      <CustomerInfoForm 
        formData={formData}
        onChange={handleInputChange}
      />

      <button 
        type="submit"
        aria-label="submit task and price" 
      >
        <span className="icon fa-solid fa-plus"></span>
        Create Invoice
      </button>
      <button 
        aria-label="submit task and price" 
        onClick={() => alert('Coming soon! :)')}
      >
        <span className="icon fa-solid fa-magnifying-glass"></span>
        Find invoice
      </button>
    </form>
  );
};

export default InvoiceInput;