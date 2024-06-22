import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: true, // show gui
      // slowMo: 100,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });
  describe('Card Validator form', () => {
    test('should add .luhn-algorithm-passed and .valid classes for valid card number', async () => {
      await page.goto(baseUrl);
      const widgetValidator = await page.$('[data-widget="cc-validator"]');
      const form = await widgetValidator.$('[data-widget="validator-form"]');
      const input = await widgetValidator.$('[data-id="validator-input"]');
      await input.type('4916424074887008');

      const submit = await form.$('[data-id="validator-btn"]');
      submit.click();

      await page.waitForSelector('[data-id="luhn-algorithm"].luhn-algorithm-passed');
      await page.waitForSelector('[data-id="validator-value"].valid');
    });

    test('should add .luhn-algorithm-failed and .invalid classes for invalid card number', async () => {
      await page.goto(baseUrl);
      const widgetValidator = await page.$('[data-widget="cc-validator"]');
      const form = await widgetValidator.$('[data-widget="validator-form"]');
      const input = await widgetValidator.$('[data-id="validator-input"]');
      await input.type('4916424074887007');

      const submit = await form.$('[data-id="validator-btn"]');
      submit.click();

      await page.waitForSelector('[data-id="luhn-algorithm"].luhn-algorithm-failed');
      await page.waitForSelector('[data-id="validator-value"].invalid');
    });
  });
});
