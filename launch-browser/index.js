const puppeteer = require('puppeteer');
const puppeteerExtra = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');

const writeLog = require('../write-log');

async function setPage(page) {
  await page.setViewport({ width: 1280, height: 720 });
  return page;
}

async function launchBrowser(options = {}) {
  const { displayLogs = true, useExtra = false } = options;
  let { headless = false } = options;

  if (headless) {
    headless = 'shell';
  }

  process.argv.forEach((processArg) => {
    if (processArg === 'hide' || processArg === '--hide') {
      headless = 'shell';
    }
    if (processArg === 'open' || processArg === '--open') {
      headless = false;
    }
  });

  if (displayLogs) {
    writeLog.step('Launch the browser');
  }

  let browser;
  if (!useExtra) {
    browser = await puppeteer.launch({ ...options, headless });
  } else {
    puppeteerExtra.use(pluginStealth());
    browser = await puppeteerExtra.launch(
      {
        executablePath: puppeteer.executablePath(),
        ...options,
        headless,
      },
    );
  }

  if (displayLogs && browser) {
    writeLog.success('Browser ready');
  }

  return browser;
}

module.exports = { launchBrowser, setPage };
