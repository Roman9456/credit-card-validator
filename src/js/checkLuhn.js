/* eslint-disable no-plusplus */
export function sumdigits(num) {
    const str = num.toString();
    let sum = 0;
    for (let k = 0; k < str.length; k++) {
      sum += parseInt(str[k], 10);
    }
    return sum;
  }
  
  export function checkLuhn(str) {
    let chSum = 0;
    for (let k = 0; k < str.length - 1; k++) {
      let localsum;
      if ((k % 2) === 0) {
        localsum = sumdigits(parseInt(str[k] * 2, 10));
      } else {
        localsum = parseInt(str[k], 10);
      }
      chSum += localsum;
    }
    const LastDigit = parseInt(str[str.length - 1], 10);
    const calcLastDigit = (chSum * 9) % 10;
    return {
      LastDigit,
      calcLastDigit,
    };
  }