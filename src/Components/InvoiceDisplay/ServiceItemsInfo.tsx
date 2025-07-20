import type { InvoiceData, ServiceData } from "../../types/InvoiceTrackerTypes";
import { calculateTotalServiceAmount, formattedTotal } from "../../utils/totalServiceAmount";

export default function ServiceItemsInfo({ invoiceData }: {invoiceData: InvoiceData}) {
 const { services } = invoiceData;

 return (
  <section className="task-info-container">
    <div>
      <h4>Date</h4>
      {services.map((service: ServiceData) => (
        <p key={service.id}>
          <time dateTime={service.serviceDate}>{service.serviceDate}</time>
        </p>
      ))}
    </div>
    <div>
      <h4>Item</h4>
      {services.map((service: ServiceData) => (
        <p key={service.id}>{service.description}</p>
      ))}
    </div>
    <div>
      <h4 className="total-header">Total</h4>
      {services.map((service: ServiceData) => {
        const total = calculateTotalServiceAmount(service);
        return <p key={service.id} className="total-amount">{formattedTotal(total)}</p>;
      })}     
    </div>
  </section>
 );
}
