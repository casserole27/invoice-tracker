import { useEffect } from "react";
import type { InvoiceData } from "../../types/InvoiceTrackerTypes";
import { calculateTotalServiceAmount, formattedTotal } from "../../utils/totalServiceAmount";

interface TotalsProps {
  invoiceData: InvoiceData;
  setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function Totals({ 
  invoiceData,
  setInvoiceData 
}: TotalsProps) {
  const { services } = invoiceData;
  
  const total = services.reduce((sum, service) => {
    return sum + calculateTotalServiceAmount(service);
  }, 0);

  //es-lint add setInvoiceData
  useEffect(() => {
    setInvoiceData(prev => ({
      ...prev,
      total
    }));
  
  }, [total, setInvoiceData]);

  return (
    <div className="total-amt-container">          
      <h3 className="total-title">total amount</h3>
      <p className="total-amt">{formattedTotal(total)}</p>
    </div>
  );
};