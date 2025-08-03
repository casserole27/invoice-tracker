import type { Section } from "./InvoiceInput";
import type { FormData } from "../../types/InvoiceTrackerTypes";

export default function CompanyInfoForm({ 
  formData,
  onChange 
}: { 
  formData: FormData
  onChange: (field: string, value: string, section: Section) => void;
}) {
  const { company } = formData;

  return (
    <div className="company-info-container">
      <input 
        type="text"
        value={company.name}
        onChange={(e) => onChange('name', e.target.value, 'company')}
        placeholder="Company name"
        required
      />
      <input 
        type="email"
        value={company.email}
        onChange={(e) => onChange('email', e.target.value, 'company')}
        placeholder="Company e-mail"
        required
      />
      <input 
        type="tel" 
        name="company-phone" 
        value={company.phone ?? ''}
        onChange={(e) => onChange('phone', e.target.value, 'company')}
        placeholder="Company phone (optional)" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        title='123-456-7890'
      />
    </div>
  );
};
