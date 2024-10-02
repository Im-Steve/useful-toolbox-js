const fs = require('fs');

const writeLog = require('../write-log');

async function createFolder(folderPath, options = {}) {
  const {
    displayLogs = true,
    exitIfError = true,
  } = options;
  let error = null;

  if (displayLogs) {
    writeLog.step('Create the folder:', folderPath);
  }

  try {
    if (fs.existsSync(folderPath)) {
      if (displayLogs) {
        writeLog.success('The folder already exists');
      }
    } else {
      await fs.promises.mkdir(folderPath);
      if (displayLogs) {
        writeLog.success('Folder created successfully');
      }
    }
  } catch (catchError) {
    error = `An error occurred while creating the folder: ${folderPath}`;
    writeLog.alert(error);
    writeLog.error(catchError);
    if (exitIfError) {
      writeLog.alert('createFolder process.exit();');
      process.exit();
    }
  }

  return error;
}

module.exports = createFolder;
