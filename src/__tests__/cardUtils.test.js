import { validateCardNumber, getCardType } from '../src/cardUtils';

test('validates card numbers correctly', () => {
  expect(validateCardNumber('4111111111111111')).toBe(true);    // Visa
  expect(validateCardNumber('5555555555554444')).toBe(true);    // MasterCard
  expect(validateCardNumber('340000000000009')).toBe(true);     // Amex
  expect(validateCardNumber('6011111111111117')).toBe(true);    // Discover
  expect(validateCardNumber('2200000000000000')).toBe(true);    // Mir
  expect(validateCardNumber('30569309025904')).toBe(true);      // Diners Club
  expect(validateCardNumber('3530111333300000')).toBe(true);    // JCB
  expect(validateCardNumber('1234567890123456')).toBe(false);   // Invalid
});

test('identifies card types correctly', () => {
  expect(getCardType('4111111111111111')).toBe('Visa');
  expect(getCardType('5555555555554444')).toBe('MasterCard');
  expect(getCardType('340000000000009')).toBe('Amex');
  expect(getCardType('6011111111111117')).toBe('Discover');
  expect(getCardType('2200000000000000')).toBe('Mir');
  expect(getCardType('30569309025904')).toBe('Diners Club');
  expect(getCardType('3530111333300000')).toBe('JCB');
  expect(getCardType('1234567890123456')).toBe('Unknown');
});
