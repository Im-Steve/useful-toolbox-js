# write-log
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module streamlines log management by assigning colors to different log types and enabling control over display in development or debugging mode, enhancing readability and log management efficiency in your applications.

## Usage

### Command line
```bash
node your-program.js --dev
node your-program.js --debug
node your-program.js --debug-<MODULES>
node your-program.js --debug-all
```

### Code
```javascript
const { writeLog } = require('useful-toolbox-js');

writeLog.alert('alert');
writeLog.alertDev('alertDev');
writeLog.debug('debug');
writeLog.dev('dev');
writeLog.error('error');
writeLog.info('info');
writeLog.log('log');
writeLog.rewrite('rewrite the same line');
writeLog.step('step');
writeLog.success('success');
writeLog.time('time');

writeLog.isDevOrDebug();
writeLog.isDebug();
writeLog.isDebugModule('module');

// shows debug logs if the module name is present in the command
const writeDebug = writeLog.setDebug('module');
writeDebug('debug');

// allows debugging with the colors of different log types
const debugPlus = writeLog.setDebugPlus('module'); // the module is optional
debugPlus.alert('alert');
debugPlus.debug('debug');
debugPlus.dev('dev');
debugPlus.error('error');
debugPlus.info('info');
debugPlus.log('log');
debugPlus.rewrite('rewrite the same line');
debugPlus.step('step');
debugPlus.success('success');
debugPlus.time('time');
```

## Test
```bash
node test.js
```
