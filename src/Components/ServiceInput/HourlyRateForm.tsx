import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { ServiceData } from "../../types/InvoiceTrackerTypes";

interface HourlyRateFormProps {
  services: ServiceData;
  onChange: (field: string, value: string) => void;
}

export default function HourlyRateForm({
  services,
  onChange
}: HourlyRateFormProps) {
  return (
    <Accordion.Root
      type='single'
      collapsible
    >
      <Accordion.Item value="item-1">  
        <Accordion.Trigger className="accordion">
          <span>Input by hourly rate</span>
          <ChevronDown className="accordion-icon" />
        </Accordion.Trigger>
        <Accordion.Content className="AccordionContent">
          <div className="hourly-input">
            <label htmlFor="hours-input" style={{ whiteSpace: 'noWrap'}}>Total Hours</label>
            <input 
              type="number"
              name="hours-input"
              value={services.numberOfHours ?? ''}
              onChange={(e) => onChange('numberOfHours', e.target.value)}
              aria-label="enter-amount"
              placeholder="Hours"
              step="0.01"
            />
            <span><strong>X</strong></span>
            <label htmlFor="hours-input" style={{ whiteSpace: 'noWrap'}}>Hourly Rate</label>
            <input 
              type="number"
              name="hourly-rate-input"
              value={services.hourlyRate ?? ''}
              onChange={(e) => onChange('hourlyRate', e.target.value)}
              aria-label="enter-amount"
              placeholder="Rate"
              step="0.01"
            />
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}