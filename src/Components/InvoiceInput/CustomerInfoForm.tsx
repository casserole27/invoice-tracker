import type { FormData } from "../../types/InvoiceTrackerTypes";
import type { Section } from "./InvoiceInput";

export default function CustomerInfoForm({
  formData,
  onChange 
}: { 
  formData: FormData 
  onChange: (field: string, value: string, section: Section) => void;
}) {
  const { customer } = formData;

  return (
    <div className="customer-info-container">
      <input 
        type="text"
        name="customer-name-input" 
        className="customer-name-input"
        aria-label="customer name" 
        placeholder="Customer name"
        value={customer.name}
        onChange={(e) => onChange('name', e.target.value, 'customer')}
        required
      />
      
      <input 
        type="email"
        name="customer-email-input" 
        className="customer-email-input"
        aria-label="customer e-mail" 
        placeholder="Customer e-mail"
        value={customer.email}
        onChange={(e) => onChange('email', e.target.value, 'customer')}
        required
      />
      
      <input 
        type="tel"
        name="customer-phone-input" 
        className="customer-phone-input"
        aria-label="customer phone" 
        placeholder="Customer phone (optional)"
        value={customer.phone || ''}
        onChange={(e) => onChange('phone', e.target.value, 'customer')}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        title='123-456-7890'
      />
    </div>
  );
};
