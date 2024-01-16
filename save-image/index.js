const fs = require('fs');
const path = require('path');

const writeLog = require('../write-log');

async function saveImage({
  page,
  imageUrl,
  folderPath,
  fileName,
  displayLogs = true,
}) {
  let imagePath;
  let error;

  if (displayLogs) {
    writeLog.step('Save the image:', imageUrl);
  }

  try {
    const extension = path.extname(imageUrl);
    imagePath = path.join(folderPath, `${fileName}${extension}`);

    if (!fs.existsSync(folderPath)) {
      await fs.promises.mkdir(folderPath);
    }

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await page.bringToFront();
    const viewSource = await page.goto(imageUrl);
    fs.writeFileSync(imagePath, await viewSource.buffer());
    await page.goBack();

    if (displayLogs) {
      writeLog.success('Image saved successfully:', imagePath);
    }
  } catch (err) {
    error = err;
    writeLog.error('An error occurred while saving the image:', imageUrl);
    writeLog.error(err);
  }

  return { imagePath, error };
}

module.exports = saveImage;
