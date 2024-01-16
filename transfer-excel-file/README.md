# transfer-excel-file
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module streamlines the process of importing and exporting data to and from Excel files. With this package, developers can efficiently manipulate Excel data, facilitating tasks such as data analysis, reporting, and data migration.

## Usage
```javascript
const { importExcelFile, exportExcelFile, importMultipleExcel } = require('useful-toolbox-js');

const { data, filePath, error } = importExcelFile(
  filePath,
  {
    displayLogs: true, // by default
    exitIfEmpty: true, // by default
    exitIfError: true, // by default
  },
);

const { data, filePath, error } = exportExcelFile(
  data,
  filePath,
  {
    displayLogs: true, // by default
    exitIfError: true, // by default
  },
);

const { data, filePaths, errors } = importMultipleExcel(filePaths, options);
// filePaths can be an array of files or a folder path
```

## Test
```bash
node test.js
```
