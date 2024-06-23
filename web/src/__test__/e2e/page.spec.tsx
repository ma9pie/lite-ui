import 'expect-puppeteer';
import puppeteer from 'puppeteer';

const BASE_URL = 'http://localhost:3000';

let browser: any;
let page: any;

const pageMove = async (path: string) => {
  return page.goto(BASE_URL + path);
};

describe('E2E test', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  test('Title', async () => {
    await pageMove('/');
    await page.waitForSelector('body');
    const title = await page.title();
    expect(title).toBe('Lite UI | Home');
  });

  test('Home', async () => {
    await pageMove('/');
    await expect(page).toMatchTextContent('Simple is best.');
    await expect(page).toMatchTextContent('v1.', { timeout: 5000 });
  });

  test('Docs > Guide > Installation', async () => {
    await pageMove('/docs/guide/installation');
    await expect(page).toMatchTextContent(
      'To use Lite UI, enter the following command in your project terminal.'
    );
  });

  test('Docs > Components > Alert', async () => {
    await pageMove('/docs/components/alert');
    await expect(page).toMatchTextContent(
      'Alert is used to display messages that require attention.'
    );
  });
});
