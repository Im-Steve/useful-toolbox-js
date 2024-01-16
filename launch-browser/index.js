const puppeteer = require('puppeteer');
const puppeteerExtra = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');

const writeLog = require('../write-log');

async function launchBrowser(options = {}) {
  const { displayLogs = true } = options;
  let { headless = false } = options;

  process.argv.forEach((processArg) => {
    if (processArg === 'hide' || processArg === '--hide') {
      headless = true;
    }
    if (processArg === 'open' || processArg === '--open') {
      headless = false;
    }
  });

  if (displayLogs) {
    writeLog.step('Launch the browser');
  }

  puppeteerExtra.use(pluginStealth());
  const browser = await puppeteerExtra.launch(
    {
      executablePath: puppeteer.executablePath(),
      ...options,
      headless,
    },
  );

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  if (displayLogs && browser && page) {
    writeLog.success('Browser ready');
  }

  return { browser, page };
}

module.exports = launchBrowser;
