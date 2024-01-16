const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const writeLog = require('../write-log');

function importExcelFile(filePath, options = {}) {
  const {
    displayLogs = true,
    exitIfEmpty = true,
    exitIfError = true,
  } = options;

  let data = [];
  let error;

  if (displayLogs) {
    writeLog.step('Import the Excel file:', filePath);
  }

  try {
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    data = xlsx.utils.sheet_to_json(worksheet);

    if (displayLogs) {
      writeLog.success('Excel file imported successfully');
      writeLog.log('number of elements:', data.length);
    }
  } catch (err) {
    error = err;
    writeLog.error('An error occurred while importing the Excel file:', filePath);
    writeLog.error(err);
    if (exitIfError) {
      writeLog.error('importExcelFile process.exit();');
      process.exit();
    }
  }

  if (data.length === 0 && exitIfEmpty) {
    writeLog.error('The Excel file is empty:', filePath);
    writeLog.error('importExcelFile process.exit();');
    process.exit();
  }

  return { data, filePath, error };
}

function exportExcelFile(data, filePath, options = {}) {
  const {
    displayLogs = true,
    exitIfError = true,
  } = options;

  let pathToExport = filePath;
  let error;

  if (displayLogs) {
    writeLog.step('Export to Excel file');
  }

  if (!pathToExport.endsWith('.xlsx')) {
    pathToExport = pathToExport.concat('.xlsx');
  }

  try {
    const workbook = xlsx.utils.book_new();
    const sheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(workbook, sheet, 'Sheet1');
    xlsx.writeFile(workbook, pathToExport);

    if (displayLogs) {
      writeLog.success('Excel file exported successfully:', pathToExport);
    }
  } catch (err) {
    error = err;
    writeLog.error('An error occurred while exporting the Excel file:', pathToExport);
    writeLog.error(err);
    if (exitIfError) {
      writeLog.error('exportExcelFile process.exit();');
      process.exit();
    }
  }

  return { data, pathToExport, error };
}

function importMultipleExcel(filePaths, options = {}) {
  const {
    displayLogs = true,
    exitIfEmpty = true,
    exitIfError = true,
  } = options;

  let filesToImport = filePaths;
  let data = [];
  let errors;

  if (displayLogs) {
    writeLog.info('Import multiple Excel files:', JSON.stringify(filePaths, null, 2));
  }

  try {
    // if filePaths is a folder
    if (typeof filePaths === 'string') {
      filesToImport = [];
      const folderFiles = fs.readdirSync(filePaths);

      folderFiles.forEach((file) => {
        if (path.extname(file) === '.xlsx') {
          filesToImport.push(path.join(filePaths, file));
        }
      });

      if (displayLogs) {
        writeLog.log('files to import:', JSON.stringify(filesToImport, null, 2));
      }
    }

    filesToImport.forEach((file) => {
      const importedFile = importExcelFile(file, { ...options, exitIfEmpty: false });

      if (importedFile.data) {
        data = data.concat(importedFile.data);
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
      writeLog.info('All Excel files imported successfully');
      writeLog.log('number of elements:', data.length);
    }
  } catch (err) {
    errors = [err];
    writeLog.error('An error occurred while importing the Excel files');
    writeLog.error(err);
    if (exitIfError) {
      writeLog.error('importMultipleExcel process.exit();');
      process.exit();
    }
  }

  if (data.length === 0 && exitIfEmpty) {
    writeLog.error('The data is empty');
    writeLog.error('importMultipleExcel process.exit();');
    process.exit();
  }

  return { data, filePaths, errors };
}

module.exports = {
  importExcelFile,
  exportExcelFile,
  importMultipleExcel,
};
