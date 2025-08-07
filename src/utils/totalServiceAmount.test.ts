import { describe, it, expect } from 'vitest';                                                          
import { calculateTotalServiceAmount, formattedTotal } from './totalServiceAmount';                     
import type { ServiceData } from '../types/InvoiceTrackerTypes'; 

const getServiceData = (
  numberOfHours: number | null, 
  hourlyRate: number | null,
  serviceAmount: number | null
): number => {
  const service: ServiceData = {
    id: 1,
    serviceDate: '2025-01-01',
    description: 'Test service',
    numberOfHours,
    hourlyRate,
    serviceAmount
  }

  const result = calculateTotalServiceAmount(service);
  return result;
}

describe('calculateTotalServiceAmount fn', () => {
  it('returns 0 when no values are provided', () => {
    const result = getServiceData(null, null, null);
    expect(result).toBe(0);
  });

  it('calculates total from hours and hourly rate', () => {
    const result = getServiceData(5, 100, null);
    expect(result).toBe(500);
  });

   it('should return 0 if only number of hours has a value', () => {
    const result = getServiceData(2, null, null);
    expect(result).toBe(0);
  });

  it('should return 0 if only hourly rate has a value', () => {
    const result = getServiceData(null, 50, null);
    expect(result).toBe(0);
  });

  it('returns service amount when provided', () => {
    const result = getServiceData(null, null, 150);
    expect(result).toBe(150);
  })

  it('returns 0 when service amount is 0', () => {
    const result = getServiceData(null, null, 0);
    expect(result).toBe(0);
  });

  it('handles decimal calculations correctly', () => {
    const result = getServiceData(2.5, 33.33, null);
    expect(result).toBe(83.32);
  })
});

describe('formatted total fn', () => {
  it('returns the zero string if the amount is null', () => {
    const result = formattedTotal(null);
    expect(result).toBe('$0.00');
  })
  it('returns formatted string with two decimals if an amount is entered', () => {
    const result = formattedTotal(40);
    expect(result).toBe('$40.00')

    const resultWithDec = formattedTotal(23.667);
    expect(resultWithDec).toBe('$23.67')
  })
});
