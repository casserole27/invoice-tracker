import CompanyInfoForm from "./CompanyInfoForm";
import CustomerInfoForm from "./CustomerInfoForm";
import type { FormData, InvoiceData } from "../../types/InvoiceTrackerTypes";
import { createInvoice, getAllInvoices, getInvoice } from "../../api";

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
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleCreateInvoice = async (e: React.FormEvent<HTMLFormElement>): Promise<void>  => {
    //! Promise<void> indicates the function is asynchronous and returns a Promise that resolves to void
    e.preventDefault(); //use this to prevent page refresh
    // let nextId = 1;   
    try {
      const response = await createInvoice(formData);
     
      //! Update state after successful API call, otherwise this creates a race condition
      setInvoiceData(prev => ({
        ...prev,
        invoiceNumber: response.id || 0, //Use server response, set up for db
        invoiceDate: formData.invoiceDate,
        company: formData.company,
        customer: formData.customer,
      }));

      setFormData(prev => ({
        ...prev,
        invoiceDate: '',
        company: { name: '', email: '', phone: '' },
        customer: { name: '', email: '', phone: '' },
      }));

    } catch (error) {
      //TODO error handling
      console.error('Failed to create invoice:', error);
    }

  };

  const handleFindInvoices = async () => {
    //TODO this works to get all and single invoices
    //TODO better UX would be more robust searching
    //TODO interface to show all invoices or single invoices

    try {
      const id = 4 as number;
      const response = await getInvoice(id);
      const allResponse = await getAllInvoices();
      console.log('Found invoice', response);
      console.log('Found all invoices', allResponse);
    } catch (error) {
      console.error('Error finding invoice:', error);
    }
  }

  const { company, customer } = formData;
  const isDisabled = !formData.invoiceDate || !company.name || !company.email || !customer.name || !customer.email

  return (
    <form onSubmit={handleCreateInvoice}>    
      <div className="title-container">
        <h1>Invoice Tracker</h1>
        <input 
          type="date"
          value={formData.invoiceDate}
          onChange={(e) => handleInputChange('invoiceDate', e.target.value)}
          required
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
        disabled={isDisabled}
      >
        {!isDisabled && <span className="icon fa-solid fa-plus"></span>}
        Create Invoice
      </button>
      <button 
        aria-label="submit task and price" 
        onClick={() => {
          handleFindInvoices();
          alert('Coming soon! :)');
        }}
      >
        <span className="icon fa-solid fa-magnifying-glass"></span>
        Find invoice
      </button>
    </form>
  );
};

export default InvoiceInput;