const { launchBrowser } = require('../launch-browser');
const saveImage = require('.');

async function runTest() {
  console.log();
  const browser = await launchBrowser();
  const page = await browser.newPage();

  console.log();
  const savedImage = await saveImage({
    page,
    imageUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
    folderPath: 'savedImages',
    fileName: 'test',
  });
  console.log(`imagePath: ${savedImage.imagePath}`);
  console.log(`error: ${savedImage.error}`);

  if (browser) {
    await browser.close();
  }
}

runTest();
