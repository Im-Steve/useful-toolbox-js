# find-file-by-name
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module can find a file or a folder by its name.

## Usage
```javascript
const { findFileByName } = require('useful-toolbox-js');

const fileFound = findFileByName(
  name,
  folderPath,
  {
    displayLogs: true, // by default
    exitIfNotFound: true, // by default
    exitIfError: true, // by default
  },
);
```

## Test
```bash
node test.js
```
