export default function validate(numCard) {
  const numCardOnlyNumber = numCard.match(/\d/g).join("");
  let sum = 0;
  if (numCardOnlyNumber.length % 2 === 0) {
    for (let i = 0; i < numCardOnlyNumber.length; i++) {
      if (i % 2 === 0) {
        sum +=
          +numCardOnlyNumber[i] * 2 > 9
            ? +numCardOnlyNumber[i] * 2 - 9
            : +numCardOnlyNumber[i] * 2;
      } else {
        sum += +numCardOnlyNumber[i];
      }
    }
  } else {
    for (let i = 0; i < numCardOnlyNumber.length; i++) {
      if (i % 2 !== 0) {
        sum +=
          +numCardOnlyNumber[i] * 2 > 9
            ? +numCardOnlyNumber[i] * 2 - 9
            : +numCardOnlyNumber[i] * 2;
      } else {
        sum += +numCardOnlyNumber[i];
      }
    }
  }
  return sum % 10 === 0;
}
