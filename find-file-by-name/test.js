const findFileByName = require('.');
const { waitForEnter } = require('../execute-and-wait');

const testFile = 'testFile.txt';
const testFolder = 'testFolder';

async function oneTest(name, folderPath, options) {
  console.log('--------------------\n');
  console.log(`Call findFileByName with ${name}, ${folderPath} and ${JSON.stringify(options, null, 2)}\n`);

  const fileFound = findFileByName(name, folderPath, options);
  console.log(`file returned: ${fileFound}`);

  console.log();
  await waitForEnter();
  console.log();
}

async function runTest() {
  await oneTest(testFile, testFolder);
  await oneTest('test', testFolder);
  await oneTest(testFile, testFolder, { displayLogs: false });
  await oneTest('badFile', testFolder, { exitIfNotFound: false });
  await oneTest(testFile, 'badFolder', { exitIfError: false });
  await oneTest(testFile, 'badFolder');
}

runTest();
