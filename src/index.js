import { validateCardNumber, getCardType } from './cardUtils.js';

const cardIcons = {
  Visa: document.getElementById('visa'),
  MasterCard: document.getElementById('mastercard'),
  Amex: document.getElementById('amex'),
  Discover: document.getElementById('discover'),
  Mir: document.getElementById('mir'),
  'Diners Club': document.getElementById('diners'),
  JCB: document.getElementById('jcb')
};

const cardNumberInput = document.getElementById('card-number');

function highlightCardIcon(cardType) {
  for (let key in cardIcons) {
    if (key === cardType) {
      cardIcons[key].classList.add('active');
    } else {
      cardIcons[key].classList.remove('active');
    }
  }
}

cardNumberInput.addEventListener('input', function (event) {
  const cardNumber = event.target.value;
  const cardType = getCardType(cardNumber);
  const isValid = validateCardNumber(cardNumber);

  document.getElementById('card-type').innerText = `Card Type: ${cardType}`;
  document.getElementById('validation-result').innerText = `Valid: ${isValid}`;

  highlightCardIcon(cardType);
});

document.getElementById('submitform').addEventListener('click', function () {
  const cardNumber = cardNumberInput.value;
  const isValid = validateCardNumber(cardNumber);
  alert(`Card number is ${isValid ? 'valid' : 'invalid'}`);
});
