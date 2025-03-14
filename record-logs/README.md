# record-logs
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module offers the capability to redirect all console messages to a file named "console.txt" located in a specific directory called "logs".

Please note that all files and folders in the "logs" directory will be deleted on startup.

## Usage

### Command line
```bash
// for showFileLogs()
node your-program.js --speed-<milliseconds>
node your-program.js --s-<milliseconds>
```

### Code
```javascript
const {
  startRecordingLogs,
  stopRecordingLogs,
  showFileLogs,
  logFolder,
  consoleFile,
  consoleFilePath,
} = require('useful-toolbox-js');

async function yourProgram() {
  await startRecordingLogs();

  // your program

  stopRecordingLogs();

  await showFileLogs({ ms: 500, onlyErrors: false }); // the options are optional
}
```

## Test
```bash
node test.js
node test.js --s-1000
```
