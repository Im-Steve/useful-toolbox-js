# date-to-js-date
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module provides a practical solution for converting dates in long-form text, whether in French or English, into JavaScript date objects. This functionality is particularly valuable for developers working with data from external sources in multiple languages.

## Usage
```javascript
const { engDateToJsDate, frDateToJsDate } = require('useful-toolbox-js');

const engDate = 'September 26, 2023'; // or 'Sep 26, 2023'
const jsDate = engDateToJsDate(engDate);

const frDate = '26 septembre 2023'; // or '26 sept. 2023'
const jsDate = frDateToJsDate(frDate);
```

## Test
```bash
node test.js
```
