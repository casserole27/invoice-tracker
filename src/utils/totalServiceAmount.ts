import type { ServiceData } from "../types/InvoiceTrackerTypes"

export const calculateTotalServiceAmount = (service: ServiceData) => {
  const { numberOfHours, hourlyRate, serviceAmount } = service;
  
  let amount: number = 0;
  if (numberOfHours && hourlyRate) {
    amount = Number(numberOfHours) * Number(hourlyRate);
  } else if (serviceAmount) {
    amount = Number(serviceAmount);
  } 
  return amount;
};

export const formattedTotal = (amount: number) => {
  console.log(typeof amount)
  if (amount == null) return '$0.00'; 
  return `$${amount.toFixed(2)}`;
};
