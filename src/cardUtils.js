function validateCardNumber(number) {
    const regex = new RegExp("^[0-9]{13,19}$");
    if (!regex.test(number)) return false;
  
    let sum = 0;
    let shouldDouble = false;
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i));
  
      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    return sum % 10 === 0;
  }
  
  function getCardType(number) {
    const cardPatterns = {
      Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      MasterCard: /^5[1-5][0-9]{14}$/,
      Amex: /^3[47][0-9]{13}$/,
      Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      Mir: /^220[0-4][0-9]{12}$/,
      'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      JCB: /^(?:2131|1800|35\d{3})\d{11}$/
    };
  
    for (const [card, pattern] of Object.entries(cardPatterns)) {
      if (pattern.test(number)) {
        return card;
      }
    }
  
    return "Unknown";
  }
  
  export { validateCardNumber, getCardType };
  