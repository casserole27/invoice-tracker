import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { ServiceData } from "../../types/InvoiceTrackerTypes";

interface ServiceAmountFormProps {
  services: ServiceData;
  onChange: (field: string, value: string) => void;
}

export default function ServiceAmountForm({
  services,
  onChange
}: ServiceAmountFormProps) {
  return (
    <Accordion.Root
      type='single'
      collapsible
    >
      <Accordion.Item value="item-2">  
        <Accordion.Trigger className="accordion">
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
    </Accordion.Root>
  );
}