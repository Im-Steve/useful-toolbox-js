# show-time
![Static Badge](https://img.shields.io/badge/JavaScript-f7df1e?logo=JavaScript&logoColor=000)

This JavaScript module offers a versatile time display solution. It allows formatting and displaying the current time in a customizable manner while also providing the capability to calculate and display elapsed time intervals.

## Usage
```javascript
const { showFormattedTime, showElapsedTime } = require('useful-toolbox-js');

const startTime = new Date();

showFormattedTime(
  startTime,
  {
    locale: 'fr', // by default
    hour12: true, // by default
    // all options of Date.toLocaleString()
  },
);

// do stuff

showElapsedTime(startTime, forWhat, options); // forWhat and options are optional
```

## Test
```bash
node test.js
```
