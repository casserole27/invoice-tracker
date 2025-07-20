import InvoiceInfo from "./InvoiceInfo";
import ServiceItemsInfo from "./ServiceItemsInfo";
import Totals from "../Totals";
import type { InvoiceData } from "../../types/InvoiceTrackerTypes";

interface InvoiceDisplayProps {
  invoiceData: InvoiceData;
}

export default function InvoiceDisplay({
  invoiceData
}: InvoiceDisplayProps) {
  return (
    <div className="invoice-display-container">
      <InvoiceInfo invoiceData={invoiceData} />
      <ServiceItemsInfo invoiceData={invoiceData} />
      <Totals invoiceData={invoiceData} />
      <div className="invoice-display-btns">
        <button 
          className="send-btn" 
          type="submit"
          onClick={() => alert('Coming soon! :)')}
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