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
            <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]"><strong>Invoice Date:</strong> <time dateTime={invoiceDate}>{invoiceDate}</time></p>
            <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]"><strong>Invoice Number:</strong> <span>{invoiceNumber}</span></p>
          </div>
        </header>

        <div className="invoice-details">
          <address className="company-info">
            <h3 className="text-sm font-bold uppercase text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)] md:text-lg">company information</h3>
            <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]"><strong>Name:</strong> {company.name}</p>
            <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]"><strong>Email:</strong> <a href={`mailto:${company.email}`}>{company.email}</a></p>
            {company.phone && (
              <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]"><strong>Phone:</strong> <a href={`tel:${company.phone}`}>{company.phone}</a></p>
            )}
          </address>

          <address className="customer-info">
            <h3 className="text-sm font-bold uppercase text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)] md:text-lg">customer information</h3>
            <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]"><strong>Name:</strong> {customer.name}</p>
            <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]"><strong>Email:</strong> <a href={`mailto:${customer.email}`}>{customer.email}</a></p>
            {customer.phone && (
              <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]"><strong>Phone:</strong> <a href={`tel:${customer.phone}`}>{customer.phone}</a></p>
            )}
          </address>

          {invoiceData.notes && (
            <div className="invoice-notes">
              <h3 className="text-sm font-bold uppercase text-[var(--charcoal)] dark:text-[var(--txt-white)] md:text-lg">Notes</h3>
              <p className="text-sm md:text-xl text-[var(--charcoal)] dark:text-[var(--txt-lt-gray)]">{invoiceData.notes}</p>
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