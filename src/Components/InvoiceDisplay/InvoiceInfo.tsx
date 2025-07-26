import type { InvoiceData } from "../../types/InvoiceTrackerTypes";
// import { format } from 'date-fns';

interface InvoiceInfoProps {
  invoiceData: InvoiceData;
}

export default function InvoiceInfo({
  invoiceData
}: InvoiceInfoProps) {
  const { company, customer, invoiceDate } = invoiceData

  //TODO
  // const invoiceDate = format(invoiceData.invoiceDate, "MM/dd/yyyy");
  
  //! temp
  const invoiceNumber = invoiceData.invoiceNumber !== null && invoiceData.invoiceNumber++;

  return (
    <div>
      <section className="invoice-info-container">
        <header className="invoice-header">
          <div className="invoice-meta">
            <p><strong>Invoice Date:</strong> <time dateTime={invoiceDate}>{invoiceDate}</time></p>
            <p><strong>Invoice Number:</strong> <span>{invoiceNumber}</span></p>
          </div>
        </header>

        <div className="invoice-details">
          <address className="company-info">
            <h3>Company Information</h3>
            <p><strong>Name:</strong> {company.name}</p>
            <p><strong>Email:</strong> <a href={`mailto:${company.email}`}>{company.email}</a></p>
            {company.phone && (
              <p><strong>Phone:</strong> <a href={`tel:${company.phone}`}>{company.phone}</a></p>
            )}
          </address>

          <address className="customer-info">
            <h3>Customer Information</h3>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Email:</strong> <a href={`mailto:${customer.email}`}>{customer.email}</a></p>
            {customer.phone && (
              <p><strong>Phone:</strong> <a href={`tel:${customer.phone}`}>{customer.phone}</a></p>
            )}
          </address>

          {invoiceData.notes && (
            <div className="invoice-notes">
              <h3>Notes</h3>
              <p>{invoiceData.notes}</p>
            </div>
          )}
        </div>
      </section>
      {/* <section>
        <button>edit info</button>
      </section> */}
    </div>
  );
};