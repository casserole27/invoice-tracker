import InvoiceInfo from "./InvoiceInfo";
import ServiceItemsInfo from "./ServiceItemsInfo";
import Totals from "./Totals";
import type { InvoiceData } from "../../types/InvoiceTrackerTypes";

interface InvoiceDisplayProps {
  invoiceData: InvoiceData;
  setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function InvoiceDisplay({
  invoiceData,
  setInvoiceData
}: InvoiceDisplayProps) {

  const clearInvoice = () => {
    setInvoiceData({
      invoiceNumber: null,
      invoiceDate: '',
      company: { name: '', email: '', phone: '' },
      customer: { name: '', email: '', phone: '' },
      services: [],
      notes: '',
      total: null
    });
  };

  return (
    <div className="invoice-display-container">
      <InvoiceInfo invoiceData={invoiceData} />
      <ServiceItemsInfo invoiceData={invoiceData} />
      <Totals invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
      <div className="invoice-display-btns">
        <button 
          className="clear-btn" 
          onClick={clearInvoice}
        >
          <span className="icon fa-solid fa-xmark"></span>
          clear invoice
        </button>
        <button 
          className="send-btn" 
        >
          <span className="icon fa-solid fa-download"></span>
          download invoice
        </button>
        <button 
          className="send-btn" 
          type="submit"
          onClick={() => alert('Coming soon! :)')}
        >
          <span className="icon fa-solid fa-envelope"></span>
          send invoice
        </button>
      </div>
    </div>
  );
};