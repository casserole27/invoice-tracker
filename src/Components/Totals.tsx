import type { InvoiceData } from "../types/InvoiceTrackerTypes";
import { calculateTotalServiceAmount, formattedTotal } from "../utils/totalServiceAmount";

export default function Totals({ invoiceData }: { invoiceData: InvoiceData}) {
  const { services } = invoiceData;
  
  const total = services.reduce((sum, service) => {
    return sum + calculateTotalServiceAmount(service);
  }, 0);

  return (
    <div className="total-amt-container">          
      <h3 className="total-title">total amount</h3>
      <p className="total-amt">{formattedTotal(total)}</p>
    </div>
  );
};