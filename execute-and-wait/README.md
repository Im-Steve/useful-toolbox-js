# execute-and-wait
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module allows you to execute console commands while also prompting the user to press "Enter" to continue the program. This feature is particularly useful for creating interactive command-line applications.

## Usage
```javascript
const { executeCommand, waitForEnter } = require('useful-toolbox-js');

const command = 'node test.js';
await executeCommand(command);
await waitForEnter(); // "Enter" to continue or "Esc" to exit
```

## Test
```bash
node test.js
```
