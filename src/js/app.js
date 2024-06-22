import CardValidator from './CardValidator';

const parent = document.querySelector('.container');
const cardValidator = new CardValidator(parent);

cardValidator.init();
