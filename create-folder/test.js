const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const createFolder = require('.');
const { waitForEnter } = require('../execute-and-wait');

const testFolder = 'testFolder';

async function oneTest(folderPath, options) {
  console.log('--------------------\n');
  console.log(`Call createFolder with ${folderPath} and ${JSON.stringify(options, null, 2)}`);

  const error = await createFolder(folderPath, options);
  console.log(`error: ${error}`);

  console.log();
  await waitForEnter();
  console.log();
}

async function runTest() {
  // Delete the test folder
  try {
    if (fs.existsSync(testFolder)) {
      rimraf.sync(testFolder);
    }
  } catch (error) {
    console.error('The test folder could not be deleted');
    console.error(error);
    console.error('process.exit();');
    process.exit();
  }

  console.log();
  console.log('TEST: first creation');
  await oneTest(testFolder);

  console.log('TEST: already existing folder');
  await oneTest(testFolder);

  console.log('TEST: not display logs');
  await oneTest(testFolder, { displayLogs: false });

  console.log('TEST: error without exit');
  await oneTest(path.join('error', 'error'), { exitIfError: false });

  console.log('TEST: error with exit');
  await oneTest(path.join('error', 'error'));
}

runTest();
