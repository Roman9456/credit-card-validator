import CardValidator from '../CardValidator';

describe('Component test. Card Validator form', () => {
  let containerEl;
  let widget;
  let input;
  let submit;
  let luhnAlgorithm;
  let validatorValue;

  beforeAll(() => {
    document.body.innerHTML = '<div id="container"></div>';
    containerEl = document.getElementById('container');
    widget = new CardValidator(containerEl);
    widget.init();
    input = containerEl.querySelector(widget.selectors.validatorInput);
    submit = containerEl.querySelector(widget.selectors.validatorBtn);
    luhnAlgorithm = containerEl.querySelector(widget.selectors.luhnAlgorithm);
    validatorValue = containerEl.querySelector(widget.selectors.validatorValue);
  });
  test.each([
    '4916424074887008',
    '6011111111111117',
    '3530111333300000',
    '5555555555554444',
    '4111111111111111',
    '371449635398431',
    '30569309025904',
  ])('should add .luhn-algorithm-passed and .valid classes for valid card number', (cardNumber) => {
    input.value = cardNumber;
    submit.click();
    expect(luhnAlgorithm.classList.contains('luhn-algorithm-passed')).toBeTruthy();
    expect(validatorValue.classList.contains('valid')).toBeTruthy();
  });

  test.each([
    '4916424074887006',
    '6011111111111116',
    '3530111333300006',
    '5555555555554446',
    '4111111111111116',
    '371449635398436',
    '30569309025906',
  ])('should add .luhn-algorithm-failed and .invalid classes for invalid card number', (cardNumber) => {
    input.value = cardNumber;
    submit.click();
    expect(luhnAlgorithm.classList.contains('luhn-algorithm-failed')).toBeTruthy();
    expect(validatorValue.classList.contains('invalid')).toBeTruthy();
  });
});
