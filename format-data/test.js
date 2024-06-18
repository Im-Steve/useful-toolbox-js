const { normalizeText, formatPath } = require('.');
const { waitForEnter } = require('../execute-and-wait');

function testNormalizeText(text) {
  if (typeof text === 'string') {
    console.log('\nText to normalize:', `'${text}'`);
  } else {
    console.log('\nText to normalize:', text);
  }

  if (typeof text === 'string' || !text) {
    console.log('Normalized text:', `'${normalizeText(text)}'`);
  } else {
    console.log('Normalized text:', normalizeText(text));
  }
}

function testFormatPath(path) {
  if (typeof path === 'string') {
    console.log('\nPath to format:', `'${path}'`);
  } else {
    console.log('\nPath to format:', path);
  }

  if (typeof path === 'string' || !path) {
    console.log('Formatted path:', `'${formatPath(path)}'`);
  } else {
    console.log('Formatted path:', formatPath(path));
  }
}

async function runTest() {
  const textToNormalize = ' Text à normaliser ';
  const pathToFormat = " Path à normaliser/\\formater pour l'avenir & +";
  let noText;
  const number = 1;

  testNormalizeText(textToNormalize);
  testNormalizeText(noText);
  testNormalizeText(number);

  console.log();
  await waitForEnter();

  testFormatPath(pathToFormat);
  testFormatPath(noText);
  testFormatPath(number);
}

runTest();
