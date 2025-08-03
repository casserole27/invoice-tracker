import express from 'express'
const router = express.Router();

//TODO dummy data - remove
let invoices = [
  {
    id: 1,
    invoiceDate: '2025-01-15',
    company: { name: 'Acme Corp', email: 'contact@acme.com', phone: '555-0123' },
    customer: { name: 'John Smith', email: 'john@example.com', phone: '555-0456' },
    services: [
      {
        id: 1,
        serviceDate: '2025-01-10',
        description: 'Website Development',
        numberOfHours: 40,
        hourlyRate: 75,
        serviceAmount: 3000,
        createdAt: new Date('2025-01-10')
      },
      {
        id: 2,
        serviceDate: '2025-01-12',
        description: 'Bug Fixes',
        numberOfHours: 8,
        hourlyRate: 75,
        serviceAmount: 600,
        createdAt: new Date('2025-01-12')
      }
    ],
    notes: 'Project completed on time',
    total: 3600,
    createdAt: new Date('2025-01-15')
  },
  {
    id: 2,
    invoiceDate: '2025-01-20',
    company: { name: 'Tech Solutions', email: 'hello@techsolutions.com', phone: null },
    customer: { name: 'Jane Doe', email: 'jane@company.com', phone: '555-0789' },
    services: [
      {
        id: 3,
        serviceDate: '2025-01-18',
        description: 'Database Optimization',
        numberOfHours: 16,
        hourlyRate: 85,
        serviceAmount: 1360,
        createdAt: new Date('2025-01-18')
      }
    ],
    notes: 'Performance improvements implemented',
    total: 1360,
    createdAt: new Date('2025-01-20')
  },
  {
    id: 3,
    invoiceDate: '2025-01-25',
    company: { name: 'StartupXYZ', email: 'admin@startupxyz.io', phone: '555-0321' },
    customer: { name: 'Mike Johnson', email: 'mike@client.org', phone: null },
    services: [],
    notes: 'Initial consultation - services to be added',
    total: null,
    createdAt: new Date('2025-01-25')
  }
]; // Temporary storage (will become database later)

let nextId = 4;

//POST /invoices
//* request is data coming in from the app
//* response is sending data back out
router.post('/', (request, response) => {
  //* create a new invoice object
  //* request.body contains all the form data
  const newInvoice = {
    id: nextId++,
    ...request.body,
    services: [],
    createdAt: new Date()
  };
  //* Add new invoices to the array
  //! This will become a db query
  invoices.push(newInvoice);
  //* 201 HTTP status code - "successfully created something"
  //* sends the new invoice data back as JSON
  response.status(201).json(newInvoice);

});

// GET /invoices
router.get('/', (request, response) => {
    response.json(invoices);
});

//GET /invoices/id
//* colon denotes a variable
router.get('/:id', (request, response) => {
  //TODO search by invoice data besides id
  //* find the invoice where the id matches
  //* parseInt converts the URL string to a number
  const invoice = invoices.find(invoice => {
    return invoice.id === parseInt(request.params.id)
  });
  if (invoice) {
    response.json(invoice);
  } else {
    //* 404 not found error
    response.status(404).json({ error: 'Invoice not found' })
  }

})

//* For reading data use find
//* For updating data, use findIndex

// PUT /invoices/id
router.put('/:id', (request, response) => {
  const { body } = request;
  const { 
    serviceDate,
    description,
    numberOfHours,
    hourlyRate,
    serviceAmount,
    notes, 
    total 
  } = body;

  //* Returns position/index of the match
  //* Returns -1 if it's not found (old programming convention)
  const index = invoices.findIndex(invoice => {
    return invoice.id === parseInt(request.params.id)
  })
  if (index !== -1) {
    const newService = {
      id: nextId++,
      serviceDate,
      description,
      numberOfHours: numberOfHours || null,
      hourlyRate: hourlyRate || null,
      serviceAmount: serviceAmount || null,
      createdAt: new Date()
    }
    
    invoices[index].services.push(newService);
    invoices[index] = { ...invoices[index], notes, total }
    response.json(invoices[index])
  } else {
    response.status(404).json({ error: 'Invoice not found'});
  }
})

//DELETE /invoices/id/services/serviceId
router.delete('/:id/services/:serviceId', (request, response) => {
  const invoiceIndex = invoices.findIndex(invoice => {
      return invoice.id === parseInt(request.params.id);
  });

  if (invoiceIndex !== -1) {
    const serviceId = parseInt(request.params.serviceId);
    if (isNaN(serviceId)) {  // Better check for invalid ID
        return response.status(400).json({ error: 'Invalid service ID' });
    }

    //*Create a new array except for the service we want to delete
    const invoice = invoices[invoiceIndex];
    invoice.services = invoice.services.filter(service => service.id !== serviceId);
    response.json(invoice);
  } else {
    response.status(404).json({ error: 'Invoice not found'})
  }
})

export default router;