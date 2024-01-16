const launchBrowser = require('.');

async function testBrowser() {
  if (process.argv.length < 3) {
    console.log('no argument');
  }
  for (let i = 2; i < process.argv.length; i += 1) {
    console.log('argument:', process.argv[i]);
  }

  const { browser, page } = await launchBrowser();
  await page.goto('https://www.google.ca');

  if (browser) {
    await browser.close();
  }
}

testBrowser();
