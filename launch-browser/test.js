const { executeCommand, waitForEnter } = require('../execute-and-wait');
const launchBrowser = require('.');

async function standardTest(options) {
  console.log('--------------------\n');
  console.log(`Call launchBrowser() with ${JSON.stringify(options, null, 2)}\n`);

  const { browser, page } = await launchBrowser(options);
  await page.goto('https://www.google.ca');

  if (browser) {
    await browser.close();
  }

  console.log();
  await waitForEnter();
  console.log();
}

async function commandLineTest(command) {
  console.log('--------------------\n');
  console.log(`Command executed: ${command}\n`);
  await executeCommand(command);
  console.log();
  await waitForEnter();
  console.log();
}

async function runTest() {
  await standardTest();
  await standardTest({ headless: true });
  await standardTest({ displayLogs: false });

  await commandLineTest('node ./testBrowser.js');
  await commandLineTest('node ./testBrowser --open');
  await commandLineTest('node ./testBrowser --hide');

  console.log('Test completed!');
}

runTest();
