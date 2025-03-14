const { normalizeText, formatFileName } = require('.');
const { waitForEnter } = require('../execute-and-wait');

function testNormalizeText(text) {
  if (typeof text === 'string') {
    console.log('\nText to normalize:', `"${text}"`);
  } else {
    console.log('\nText to normalize:', text);
  }

  if (typeof text === 'string' || !text) {
    console.log('Normalized text:', `"${normalizeText(text)}"`);
  } else {
    console.log('Normalized text:', normalizeText(text));
  }
}

function testFormatFileName(fileName) {
  if (typeof fileName === 'string') {
    console.log('\nFile name to format:', `"${fileName}"`);
  } else {
    console.log('\nFile name to format:', fileName);
  }

  console.log('Formatted file name:', JSON.stringify(formatFileName(fileName)));
}

async function runTest() {
  const textToNormalize = ' Text à normaliser ';
  const fileNameToFormat = ' <Nom de fichier à normaliser/\\|formater : "pour l\'avenir* & +?"> ';
  let noText;
  const number = 1;

  testNormalizeText(textToNormalize);
  testNormalizeText(noText);
  testNormalizeText(number);

  console.log();
  await waitForEnter();

  testFormatFileName(fileNameToFormat);
  testFormatFileName(noText);
  testFormatFileName(number);
}

runTest();
