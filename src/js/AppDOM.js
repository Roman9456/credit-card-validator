export default class AppDOM {
  constructor(parenEl, selectors) {
    this.parentEl = parenEl;
    this.selectors = selectors;
    this.els = {
      errorMessage: null,
      luhnAlgorithm: null,
      validatorValue: null,
    };

    this.init();
  }

  init() {
    this.els.errorMessage = this.parentEl.querySelector(this.selectors.errorMessage);
    this.els.luhnAlgorithm = this.parentEl.querySelector(this.selectors.luhnAlgorithm);
    this.els.validatorValue = this.parentEl.querySelector(this.selectors.validatorValue);
  }

  showErrorMessage(messageText) {
    this.els.errorMessage.textContent = messageText;
    this.els.errorMessage.classList.remove('hidden');
  }

  hideErrorMessage() {
    this.els.errorMessage.classList.add('hidden');
  }

  showLuhnAlgorithmPassed() {
    this.els.luhnAlgorithm.classList.add('luhn-algorithm-passed');
  }

  showLuhnAlgorithmFailed() {
    this.els.luhnAlgorithm.classList.add('luhn-algorithm-failed');
  }

  hideLuhnAlgorithmResult() {
    this.els.luhnAlgorithm.classList.remove('luhn-algorithm-passed');
    this.els.luhnAlgorithm.classList.remove('luhn-algorithm-failed');
  }

  showInputPassedStatus() {
    this.els.validatorValue.classList.add('valid');
  }

  showInputFailedStatus() {
    this.els.validatorValue.classList.add('invalid');
  }

  hideInputResultStatus() {
    this.els.validatorValue.classList.remove('valid');
    this.els.validatorValue.classList.remove('invalid');
  }

  hideResultsAndMessages() {
    this.hideErrorMessage();
    this.hideLuhnAlgorithmResult();
    this.hideInputResultStatus();
  }
}
