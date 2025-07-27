import express from 'express'
const router = express.Router();

let invoices = []; // Temporary storage (will become database later)
let nextId = 1;

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