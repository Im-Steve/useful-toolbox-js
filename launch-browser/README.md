# launch-browser
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module harnesses the power of Puppeteer to seamlessly automate web browsers for various tasks while incorporating advanced techniques to prevent detection as a bot.

## Usage

### Command line
```bash
node your-program.js --open // by default
node your-program.js --hide // not recommended
```

### Code
```javascript
const { launchBrowser, setPage } = require('useful-toolbox-js');

const browser = await launchBrowser({
  displayLogs: true, // by default
  headless: false, // by default
  useExtra: false, // to use puppeteerExtra, by default
  // all options of puppeteer.launch()
});

let page = await browser.newPage();
page = await setPage(page);

if (browser) {
  await browser.close();
}
```

## Test
```bash
node test.js
```
