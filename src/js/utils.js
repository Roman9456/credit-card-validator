import creditCardsData from '../db/creditCards.json';

export default function identifyCardName(cardNumber) {
  const creditCards = creditCardsData;

  for (const [cardName, cardIDs] of Object.entries(creditCards)) {
    for (const cardID of cardIDs) {
      if (typeof cardID === 'string') {
        if (cardNumber.startsWith(cardID)) return cardName;
      } else {
        const subStr = cardNumber.substr(0, cardID.min.length);
        if (subStr >= cardID.min && subStr <= cardID.max) return cardName;
      }
    }
  }
  return false;
}

export function luhnCheck(cardNumber) {
  const len = cardNumber.length;
  let sum = 0;

  for (let i = 0; i < len; i += 1) {
    let digit = parseInt(cardNumber[i], 10);
    if ((len - i) % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  return sum % 10 === 0;
}
