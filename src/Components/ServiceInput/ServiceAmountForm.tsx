import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { FormData, ServiceData } from "../../types/InvoiceTrackerTypes";

interface ServiceAmountFormProps {
  services: ServiceData;
  onChange: (field: string, value: string) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function ServiceAmountForm({
  services,
  onChange,
  setFormData
}: ServiceAmountFormProps) {

   const handleAccordionTrigger = (field: string): void => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [field]: null,
      }
    }));
  };

  return (
    <Accordion.Item value="item-2">  
      <Accordion.Trigger 
        className="accordion" 
        onClick={() => {
          handleAccordionTrigger('hourlyRate');
          handleAccordionTrigger('numberOfHours');
        }}  
        >
        <span>Input by amount</span>
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
      <Accordion.Content className="AccordionContent">
        <div className="task-input">
          <input 
            type="number"
            name="amount-input"
            value={services.serviceAmount ?? ''}
            onChange={(e) => onChange('serviceAmount', e.target.value)}
            aria-label="enter-amount"
            placeholder="Enter amount"
            step="0.01"
          />
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}