import identifyCardName, { luhnCheck } from '../utils';

describe('Luhn algorithm test with correct number and', () => {
  test.each([
    ['4916424074887008', 'Visa'],
    ['5462007742598480', 'Mastercard'],
    ['6011268260625055', 'Discover'],
    ['3530111333300000', 'JCB'],
    ['30569309025904', 'Diners Club'],
  ])('even number of digits should return \'true\' (%s %s)', (cardNumber) => {
    expect(luhnCheck(cardNumber)).toBeTruthy();
  });

  test.each([
    ['373123523443595', 'American Express'],
    ['342562022966432', 'American Express'],
  ])('odd  number of digits should return \'true\' (%s %s)', (cardNumber) => {
    expect(luhnCheck(cardNumber)).toBeTruthy();
  });
});

describe('Luhn algorithm test with incorrect number and', () => {
  test.each([
    ['4916424074887007', 'Visa'],
    ['5462007742598487', 'Mastercard'],
    ['6011268260625057', 'Discover'],
    ['3530111333300007', 'JCB'],
    ['30569309025907', 'Diners Club'],
  ])('even number of digits should return \'true\' (%s %s)', (cardNumber) => {
    expect(luhnCheck(cardNumber)).toBeFalsy();
  });

  test.each([
    ['373123523443597', 'American Express'],
    ['342562022966437', 'American Express'],
  ])('odd  number of digits should return \'true\' (%s %s)', (cardNumber) => {
    expect(luhnCheck(cardNumber)).toBeFalsy();
  });
});

describe('identifyCardName(), if the identifier belongs to the', () => {
  describe('\'МИР\' payment system, it must return \'MIR\'', () => {
    test.each([
      '2',
    ])('(%s)', (cardNumber) => {
      expect(identifyCardName(cardNumber)).toBe('MIR');
    });
  });

  describe('\'Diners Club\' payment system, it must return \'DinersClub\'', () => {
    test.each([
      '300', '301', '304', '305', '30569309025904',
    ])('(%s)', (cardNumber) => {
      expect(identifyCardName(cardNumber)).toBe('DinersClub');
    });
  });

  describe('\'American Express\' payment system, it must return \'AmericanExpress\'', () => {
    test.each([
      '34', '37', '342562022966432', '373123523443595',
    ])('(%s)', (cardNumber) => {
      expect(identifyCardName(cardNumber)).toBe('AmericanExpress');
    });
  });

  describe('\'JSB\' payment system, it must return \'JSB\'', () => {
    test.each([
      '3528', '3529', '3588', '3589', '3530111333300000',
    ])('(%s)', (cardNumber) => {
      expect(identifyCardName(cardNumber)).toBe('JSB');
    });
  });

  describe('\'Visa\' payment system, it must return \'Visa\'', () => {
    test.each([
      '4', '4916424074887008',
    ])('(%s)', (cardNumber) => {
      expect(identifyCardName(cardNumber)).toBe('Visa');
    });
  });

  describe('\'Master Card\' payment system, it must return \'MasterCard\'', () => {
    test.each([
      '51', '52', '54', '55', '5462007742598480',
    ])('(%s)', (cardNumber) => {
      expect(identifyCardName(cardNumber)).toBe('MasterCard');
    });
  });

  describe('\'Discover\' payment system, it must return \'Discover\'', () => {
    test.each([
      '6011', '622126', '622127', '6221260', '622924', '622925', '6229259',
      '644', '645', '6440', '648', '649', '6499', '65', '6011268260625055',
    ])('(%s)', (cardNumber) => {
      expect(identifyCardName(cardNumber)).toBe('Discover');
    });
  });
});

describe('identifyCardName() should not return', () => {
  test.each([
    '30', '306',
  ])('\'DinersClub\' (%s)', (cardNumber) => {
    expect(identifyCardName(cardNumber)).not.toBe('DinersClub');
  });

  test.each([
    '3', '33', '35', '36', '38',
  ])('\'AmericanExpress\' (%s)', (cardNumber) => {
    expect(identifyCardName(cardNumber)).not.toBe('AmericanExpress');
  });

  test.each([
    '3', '35', '352', '3527', '23279', '3590', '3591',
  ])('\'JCB\' (%s)', (cardNumber) => {
    expect(identifyCardName(cardNumber)).not.toBe('JCB');
  });

  test.each([
    '5', '50', '509', '56', '560',
  ])('\'MasterCard\' (%s)', (cardNumber) => {
    expect(identifyCardName(cardNumber)).not.toBe('MasterCard');
  });

  test.each([
    '6', '60', '601', '6010', '60109',
    '622125', '6221259', '622926', '6229260',
    '64', '643', '6439', '66', '660',
  ])('\'Discover\' (%s)', (cardNumber) => {
    expect(identifyCardName(cardNumber)).not.toBe('Discover');
  });
});
