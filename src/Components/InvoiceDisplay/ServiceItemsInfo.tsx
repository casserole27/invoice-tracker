import { useState } from "react";
import type { InvoiceData, ServiceData } from "../../types/InvoiceTrackerTypes";
import { calculateTotalServiceAmount, formattedTotal } from "../../utils/totalServiceAmount";

interface ServiceItemsInfoProps {
  invoiceData: InvoiceData,
  setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function ServiceItemsInfo({ 
  invoiceData,
  setInvoiceData 
}: ServiceItemsInfoProps) {
  const { services } = invoiceData;
  const [serviceId, setServiceId] = useState<number>(0);

  const handleRemoveTask = () => {
    const newServiceArray = services.filter((service: ServiceData) => service.id !== serviceId);
      setInvoiceData(prev => ({
        ...prev,
        services: newServiceArray
      }));
  };

return (
  <div>
    <section className="task-info-container">
      <div>
        {services.map((service: ServiceData) => {
          const total = calculateTotalServiceAmount(service);
          return (
            <div key={service.id} style={{ display: 'grid', gridTemplateColumns: 'auto auto 1fr auto', columnGap: '1rem' }}>
              <input 
                type="checkbox" 
                name='task' 
                aria-label="select task" 
                value={service.id}
                onChange={(e) => {
                  if(e.target.checked) {
                    setServiceId(service.id)
                  } else {
                    setServiceId(0);
                  }
                }}
              />
              <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]">
                <time dateTime={service.serviceDate}>{service.serviceDate}</time>
              </p>
              <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]">{service.description}</p>
              <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]">{formattedTotal(total)}</p>
            </div>
          );
        })}
      </div>
    </section>
    <section style={{ display: 'flex', gap: '1rem' }}>
      <button 
        disabled={services.length === 0 || serviceId === 0}
        onClick={handleRemoveTask}
        >
          remove task
      </button>
      <button 
        disabled={services.length === 0 || serviceId === 0}
        onClick={() => alert('Coming soon! :)')}
      >
        edit task
      </button>
    </section>
  </div>
  );
}
