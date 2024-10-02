const { engDateToJsDate, frDateToJsDate } = require('.');

function runTest() {
  let frDate;
  let engDate;
  let jsDate;

  console.log('\nFRENCH');
  console.log('--------------------');
  frDate = '25 décembre 2023';
  console.log('frDate:', frDate);
  jsDate = frDateToJsDate(frDate);
  console.log('jsDate:', jsDate);
  console.log('--------------------');
  frDate = '25 déc. 2023';
  console.log('frDate:', frDate);
  jsDate = frDateToJsDate(frDate);
  console.log('jsDate:', jsDate);
  console.log('--------------------');
  frDate = '';
  console.log('frDate:', frDate);
  jsDate = frDateToJsDate(frDate);
  console.log('jsDate:', jsDate);
  console.log('--------------------');
  frDate = 'December 25, 2023';
  console.log('frDate:', frDate);
  jsDate = frDateToJsDate(frDate);
  console.log('jsDate:', jsDate);
  console.log('--------------------');

  console.log('\nENGLISH');
  console.log('--------------------');
  engDate = 'December 25, 2023';
  console.log('engDate:', engDate);
  jsDate = engDateToJsDate(engDate);
  console.log('jsDate:', jsDate);
  console.log('--------------------');
  engDate = 'Dec 25, 2023';
  console.log('engDate:', engDate);
  jsDate = engDateToJsDate(engDate);
  console.log('jsDate:', jsDate);
  console.log('--------------------');
  engDate = '';
  console.log('engDate:', engDate);
  jsDate = engDateToJsDate(engDate);
  console.log('jsDate:', jsDate);
  console.log('--------------------');
  engDate = '25 décembre 2023';
  console.log('engDate:', engDate);
  jsDate = engDateToJsDate(engDate);
  console.log('jsDate:', jsDate);
  console.log('--------------------');
}

runTest();
