export default function CardType(str) {
    const CardTyp = [
      { start: '2', typ: 'Мир', classes: 'sn-mir' },
      { start: '30', typ: 'Diners Club', classes: 'sn-dinersclub' },
      { start: '36', typ: 'Diners Club', classes: 'sn-dinersclub' },
      { start: '38', typ: 'Diners Club', classes: 'sn-dinersclub' },
      { start: '31', typ: 'JCB International', classes: 'sn-jsb' },
      { start: '35', typ: 'JCB International', classes: 'sn-jsb' },
      { start: '34', typ: 'American Express', classes: 'sn-amex' },
      { start: '37', typ: 'American Express', classes: 'sn-amex' },
      { start: '4', typ: 'VISA', classes: 'sn-visa' },
      { start: '50', typ: 'Maestro', classes: 'sn-maestro' },
      { start: '56', typ: 'Maestro', classes: 'sn-maestro' },
      { start: '57', typ: 'Maestro', classes: 'sn-maestro' },
      { start: '58', typ: 'Maestro', classes: 'sn-maestro' },
      { start: '51', typ: 'MasterCard', classes: 'sn-mastercard' },
      { start: '52', typ: 'MasterCard', classes: 'sn-mastercard' },
      { start: '53', typ: 'MasterCard', classes: 'sn-mastercard' },
      { start: '54', typ: 'MasterCard', classes: 'sn-mastercard' },
      { start: '55', typ: 'MasterCard', classes: 'sn-mastercard' },
      { start: '60', typ: 'Discover', classes: 'sn-discover' },
      { start: '62', typ: 'China UnionPay', classes: 'sn-unionpay' },
      { start: '63', typ: 'Maestro', classes: 'sn-maestro' },
      { start: '67', typ: 'Maestro', classes: 'sn-maestro' },
      { start: '7', typ: 'УЭК', classes: 'sn-uek' },
    ];
  
    const vals = CardTyp.filter((el) => {
      const x = str.startsWith(el.start);
      return x;
    });
  
    if (vals.length === 1) {
      return vals[0];
    }
    return undefined;
  }