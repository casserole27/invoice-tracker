import type { FormData, InvoiceData } from "../../types/InvoiceTrackerTypes";
import HourlyRateForm from "./HourlyRateForm";
import ServiceAmountForm from "./ServiceAmountForm";

interface InvoiceItemsProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function ServiceInput({
  formData,
  setFormData,
  setInvoiceData
}: InvoiceItemsProps) {
  const { services } = formData;
  // console.log('services', services);

  const handleServiceInputChange = (field: string, value: string): void => {
    //! temp
    let nextId = 1;

    //TODO
    // const processedValue = value === '' ? null : parseFloat(value);
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        id: nextId++,
        [field]: value
      }
    }));
  };

  const handleInputChange = (field: string, value: string): void => {
    //TODO
    // const processedValue = value === '' ? null : parseFloat(value);
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addService = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO
    // const newService = await api.post(`/invoices/${invoiceData.invoiceNumber}/services`, formData.service);

    // Add to local state
    setInvoiceData(prev => ({
      ...prev,
      services: [...prev.services, formData.services],
      notes: formData.notes ? formData.notes : '',
    }));
    
    // Clear the form for next service
    setFormData(prev => ({
      ...prev,
      services: {
        id: 0,
        serviceDate: '',
        description: '',
        numberOfHours: null,
        hourlyRate: null,
        serviceAmount: null
      },
      notes: ''
    }));
  };

  return (
    <form onSubmit={addService}>
      <div className="service-title-container">
        <label htmlFor="task-date" className="service-date">Date of service</label>
        <input 
          type="date"
          name="task-date"
          value={services.serviceDate}
          onChange={(e) => handleServiceInputChange('serviceDate', e.target.value)}
          required
        />
      </div>
      <input 
        type="text"
        name="task-input" 
        value={services.description}
        onChange={(e) => handleServiceInputChange('description', e.target.value)}
        aria-label="enter task" 
        placeholder="Enter task"
        required
      />
      <HourlyRateForm services={services} onChange={handleServiceInputChange} />
      <ServiceAmountForm services={services} onChange={handleServiceInputChange} />
      <textarea 
        name="invoice-notes"
        value={formData.notes}
        onChange={(e) => handleInputChange('notes', e.target.value)}
        rows={8}
        placeholder="Enter invoice notes here">
      </textarea>
      <button
        type="submit" 
        className="save-btn"
      >
        <span className="icon fa-solid fa-plus"></span>
        Add service
      </button>
    </form>
  );
};

