# create-folder
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module manages folder creation.

## Usage
```javascript
const { createFolder } = require('useful-toolbox-js');

const error = await createFolder(
  folderPath,
  {
    displayLogs: true, // by default
    exitIfError: true, // by default
  },
);
```

## Test
```bash
node test.js
```
