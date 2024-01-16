const fs = require('fs');
const path = require('path');

const writeLog = require('../write-log');

function importJsonFile(filePath, options = {}) {
  const {
    displayLogs = true,
    exitIfEmpty = true,
    exitIfError = true,
  } = options;

  let data;
  let error;

  if (displayLogs) {
    writeLog.step('Import the JSON file:', filePath);
  }

  try {
    const fileData = fs.readFileSync(filePath, 'utf8');

    data = JSON.parse(fileData);

    if (displayLogs) {
      writeLog.success('JSON file imported successfully');
      if (Array.isArray(data)) {
        writeLog.log('number of elements:', data.length);
      } else {
        writeLog.log('data type:', typeof data);
      }
    }
  } catch (err) {
    error = err;
    writeLog.error('An error occurred while importing the JSON file:', filePath);
    writeLog.error(err);
    if (exitIfError) {
      writeLog.error('importJsonFile process.exit();');
      process.exit();
    }
  }

  if (exitIfEmpty && (!data
  || (Array.isArray(data) && data.length === 0)
  || (typeof data === 'object' && !Array.isArray(data) && Object.keys(data).length === 0))) {
    writeLog.error('The JSON file is empty:', filePath);
    writeLog.error('importJsonFile process.exit();');
    process.exit();
  }

  return { data, filePath, error };
}

function exportJsonFile(data, filePath, options = {}) {
  const {
    displayLogs = true,
    exitIfError = true,
  } = options;

  let pathToExport = filePath;
  let error;

  if (displayLogs) {
    writeLog.step('Export to JSON file');
  }

  if (!pathToExport.endsWith('.json')) {
    pathToExport = pathToExport.concat('.json');
  }

  try {
    const jsonData = JSON.stringify(data);

    fs.writeFileSync(pathToExport, jsonData, 'utf-8');

    if (displayLogs) {
      writeLog.success('JSON file exported successfully:', pathToExport);
    }
  } catch (err) {
    error = err;
    writeLog.error('An error occurred while exporting the JSON file:', pathToExport);
    writeLog.error(err);
    if (exitIfError) {
      writeLog.error('exportJsonFile process.exit();');
      process.exit();
    }
  }

  return { data, pathToExport, error };
}

function importMultipleJson(filePaths, options = {}) {
  const {
    displayLogs = true,
    exitIfEmpty = true,
    exitIfError = true,
  } = options;

  let filesToImport = filePaths;
  let data = [];
  let errors;

  if (displayLogs) {
    writeLog.info('Import multiple JSON files:', JSON.stringify(filePaths, null, 2));
  }

  try {
    // if filePaths is a folder
    if (typeof filePaths === 'string') {
      filesToImport = [];
      const folderFiles = fs.readdirSync(filePaths);

      folderFiles.forEach((file) => {
        if (path.extname(file) === '.json') {
          filesToImport.push(path.join(filePaths, file));
        }
      });

      if (displayLogs) {
        writeLog.log('files to import:', JSON.stringify(filesToImport, null, 2));
      }
    }

    filesToImport.forEach((file) => {
      const importedFile = importJsonFile(file, { ...options, exitIfEmpty: false });

      if (importedFile.data) {
        if (Array.isArray(importedFile.data)) {
          data = data.concat(importedFile.data);
        } else {
          data.push(importedFile.data);
        }
      }

      if (importedFile.error) {
        if (!errors) {
          errors = [importedFile.error];
        } else {
          errors.push(importedFile.error);
        }
      }
    });

    if (displayLogs) {
      writeLog.info('All JSON files imported successfully');
      writeLog.log('number of elements:', data.length);
    }
  } catch (err) {
    errors = [err];
    writeLog.error('An error occurred while importing the JSON files');
    writeLog.error(err);
    if (exitIfError) {
      writeLog.error('importMultipleJson process.exit();');
      process.exit();
    }
  }

  if (data.length === 0 && exitIfEmpty) {
    writeLog.error('The data is empty');
    writeLog.error('importMultipleJson process.exit();');
    process.exit();
  }

  return { data, filePaths, errors };
}

module.exports = {
  importJsonFile,
  exportJsonFile,
  importMultipleJson,
};
