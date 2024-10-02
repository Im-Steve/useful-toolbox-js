# save-image
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module provides an efficient solution for saving images from the web using Puppeteer.

## Usage
```javascript
const { saveImage } = require('useful-toolbox-js');

const { imagePath, error } = await saveImage({
  page, // from Puppeteer
  imageUrl: 'url',
  folderPath: 'path',
  fileName: 'name',
  displayLogs: true, // by default
});
```

## Test
```bash
node test.js
```
