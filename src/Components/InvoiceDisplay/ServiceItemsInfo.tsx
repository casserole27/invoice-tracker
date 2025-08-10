import { useState } from "react";
import type { InvoiceData, ServiceData } from "../../types/InvoiceTrackerTypes";
import { calculateTotalServiceAmount, formattedTotal } from "../../utils/totalServiceAmount";
import { deleteService } from "../../api";

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

  const handleRemoveTask = async () => {
    try {
      const result = await deleteService(invoiceData.invoiceNumber, serviceId);
      
      setInvoiceData(prev => ({
        ...prev,
        services: result
      }));
    } catch (error) {
      console.error('Service not found:', error);
    }
  };

  return (
    <div>
      <section className="task-info-container">
        <div>
          {services.map((service: ServiceData) => {
            const total = calculateTotalServiceAmount(service);
            return (
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto 1fr auto', columnGap: '1rem' }}>
                <input 
                  type="checkbox" 
                  name='task' 
                  aria-label="select task" 
                  checked={service.id === serviceId}
                  onChange={(e) => {
                    if(e.target.checked) {
                      setServiceId(service.id)
                    } else if (serviceId === service.id) {
                      setServiceId(0);
                    }
                  }}
                />
                <p key={service.id}>
                  <time dateTime={service.serviceDate}>{service.serviceDate}</time>
                </p>
                <p key={service.id}>{service.description}</p>
                <p key={service.id} className="total-amount">{formattedTotal(total)}</p>
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
