const fs = require('fs');
const path = require('path');

const { normalizeText } = require('../format-data');
const writeLog = require('../write-log');

function findFileByName(name, folderPath, options = {}) {
  const {
    displayLogs = true,
    exitIfNotFound = true,
    exitIfError = true,
  } = options;

  if (displayLogs) {
    writeLog.step('Find a file/folder by name:', name);
    writeLog.step('in the folder:', folderPath);
  }

  let fileFound;
  const normalizedName = normalizeText(name);

  try {
    const folderFiles = fs.readdirSync(folderPath);

    folderFiles.forEach((file) => {
      const normalizedFile = normalizeText(file);

      if (normalizedFile === normalizedName) {
        fileFound = path.join(folderPath, file);
      }

      if (normalizedFile.includes(normalizedName) && !fileFound) {
        fileFound = path.join(folderPath, file);
      }
    });
  } catch (error) {
    writeLog.alert('An error occurred while reading the folder:', folderPath);
    writeLog.error(error);
    if (exitIfError) {
      writeLog.alert('findFileByName process.exit();');
      process.exit();
    }

    return fileFound;
  }

  if (fileFound) {
    const stats = fs.statSync(fileFound);

    if (stats.isDirectory() && displayLogs) {
      writeLog.success('Folder found:', fileFound);
    } else if (displayLogs) {
      writeLog.success('File found:', fileFound);
    }
  } else {
    writeLog.alert('No file/folder found for:', normalizedName);
    if (exitIfNotFound) {
      writeLog.alert('findFileByName process.exit();');
      process.exit();
    }
  }

  return fileFound;
}

module.exports = findFileByName;
