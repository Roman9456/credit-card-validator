import puppetteer from "puppeteer";
import { fork } from "child_process";

describe("test validator form", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:8888";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      args: ["--no-sandbox"],
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  }, 35000);

  test("visa", async () => {
    // jest.setTimeout(35000);
    await page.goto(baseUrl);
    const input = await page.$("#numberCard-input");
    await input.type("4539283476916568");
    const submit = await page.$("#card-submit");
    await submit.click();
    await page.waitForSelector(".cardVisa.active");
  }, 35000);

  test("AmericanExpress", async () => {
    await page.goto(baseUrl);
    const input = await page.$("#numberCard-input");
    await input.type("340054986290712");
    const submit = await page.$("#card-submit");
    await submit.click();
    await page.waitForSelector(".cardAmericanExpress.active");
  }, 35000);

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
});
