# Useful JavaScript Toolbox
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This useful JavaScript package bundles a set of core and frequently used modules designed to streamline the development of JavaScript projects of all kinds.

## Usage
```javascript
// To find out how to use each module, refer to the README in each folder.

const { executeCommand, waitForEnter } = require('useful-toolbox-js/execute-and-wait');

const writeLog = require('useful-toolbox-js/write-log');

const {
  startRecordingLogs,
  stopRecordingLogs,
  showFileLogs,
} = require('useful-toolbox-js/record-logs');

const { showFormattedTime, showElapsedTime } = require('useful-toolbox-js/show-time');

const launchBrowser = require('useful-toolbox-js/launch-browser');

const {
  importExcelFile,
  exportExcelFile,
  importMultipleExcel,
} = require('useful-toolbox-js/transfer-excel-file');

const {
  importJsonFile,
  exportJsonFile,
  importMultipleJson,
} = require('useful-toolbox-js/transfer-json-file');

const { engDateToJsDate, frDateToJsDate } = require('useful-toolbox-js/date-to-js-date');

const saveImage = require('useful-toolbox-js/save-image');

const animations = require('useful-toolbox-js/useless-animations');
// or
const {
  happyStickFigure,
  flipTable,
  flipTableBear,
  bearInLove,
} = require('useful-toolbox-js');
```

## Test
```bash
npm run lint
npm run pre-release
```
