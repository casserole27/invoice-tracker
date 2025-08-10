import { useEffect } from "react";
import type { InvoiceData } from "../../types/InvoiceTrackerTypes";
import { calculateTotalServiceAmount, formattedTotal } from "../../utils/totalServiceAmount";
import { updateInvoice } from "../../api";

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

  useEffect(() => {
    //TODO may need to optimize this
    const handleTotalUpdate = async () => {
      try {
        await updateInvoice(invoiceData.invoiceNumber, { total });
        setInvoiceData(prev => ({ ...prev, total }));
      } catch (error) {
        console.error('Failed to update total:', error);
      }
    };

    handleTotalUpdate();
  }, [total, invoiceData.invoiceNumber, setInvoiceData]);

  return (
    <div className="total-amt-container">          
      <h3 className="total-title">total amount</h3>
      <p className="total-amt">{formattedTotal(total)}</p>
    </div>
  );
};