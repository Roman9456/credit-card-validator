/* eslint-disable max-len */
import cardValidatorHTML from '../cardValidator.html';
import identifyCardName, { luhnCheck } from './utils';
import AppDOM from './AppDOM';

export default class CardValidator {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.parentEl.innerHTML = cardValidatorHTML;
    this.selectors = {
      validatorForm: '[data-widget="validator-form"]',
      validatorValue: '[data-id="validator-value"]',
      validatorInput: '[data-id="validator-input"]',
      validatorBtn: '[data-id="validator-btn"]',
      errorMessage: '[data-id="error-message"]',
      luhnAlgorithm: '[data-id="luhn-algorithm"]',
      cards: {
        Visa: '[data-id="Visa"]',
        MasterCard: '[data-id="MasterCard"]',
        AmericanExpress: '[data-id="AmericanExpress"]',
        Discover: '[data-id="Discover"]',
        JSB: '[data-id="JSB"]',
        DinersClub: '[data-id="DinersClub"]',
        MIR: '[data-id="MIR"]',
      },
    };
    this.appDOM = new AppDOM(this.parentEl, this.selectors);
    this.inputEl = null;
    this.cardsEls = [];
  }

  init() {
    const validatorFormEl = this.parentEl.querySelector(this.selectors.validatorForm);
    validatorFormEl.addEventListener('submit', this.onSubmit.bind(this));

    this.inputEl = this.parentEl.querySelector(this.selectors.validatorInput);
    this.inputEl.addEventListener('input', this.onInput.bind(this));

    const validateBtnEl = this.parentEl.querySelector(this.selectors.validatorBtn);
    validateBtnEl.addEventListener('click', this.onValidateBtnClick.bind(this));

    for (const cardSelector of Object.values(this.selectors.cards)) {
      this.cardsEls.push(this.parentEl.querySelector(cardSelector));
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.onValidateBtnClick.call(this);
  }

  onInput(event) {
    this.appDOM.hideResultsAndMessages();
    const { value } = event.currentTarget;
    if (value === '') {
      this.cardsEls.forEach((cardEl) => cardEl.classList.remove('not-identified-card'));
      return;
    }

    const identifiedCardName = identifyCardName(value);
    if (identifiedCardName) {
      const identifiedCardEl = this.parentEl.querySelector(this.selectors.cards[identifiedCardName]);
      identifiedCardEl.classList.remove('not-identified-card');
      this.cardsEls
        .filter((cardEl) => cardEl.dataset.id !== identifiedCardName)
        .forEach((cardEl) => cardEl.classList.add('not-identified-card'));
    } else this.cardsEls.forEach((cardEl) => cardEl.classList.remove('not-identified-card'));
  }

  onValidateBtnClick() {
    const { value } = this.inputEl;
    if (value === '') {
      this.appDOM.showErrorMessage('Enter the number');
      return;
    }

    const isNumber = /^[0-9]+$/.test(value);
    if (!isNumber) {
      this.appDOM.showErrorMessage('Enter only numbers');
      return;
    }

    const isValidNumber = luhnCheck(value);
    let inputStatus;

    if (isValidNumber) {
      inputStatus = true;
      this.appDOM.showLuhnAlgorithmPassed();
    } else {
      inputStatus = false;
      this.appDOM.showLuhnAlgorithmFailed();
    }

    if (inputStatus) this.appDOM.showInputPassedStatus();
    else this.appDOM.showInputFailedStatus();
  }
}
