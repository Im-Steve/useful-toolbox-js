const path = require('path');

const { importJsonFile, exportJsonFile, importMultipleJson } = require('.');
const { waitForEnter } = require('../execute-and-wait');

const testFolder = 'filesToTest';
const fileWithData = path.join(testFolder, 'dataToTest.json');
const exportedFile = path.join(testFolder, 'exportedData.json');
const fileWithoutExt = path.join(testFolder, 'exportedData');
const emptyFile = path.join(testFolder, 'emptyFile.json');
const emptyStringFile = path.join(testFolder, 'emptyString.json');
const emptyArrayFile = path.join(testFolder, 'emptyArray.json');
const emptyObjectFile = path.join(testFolder, 'emptyObject.json');
const fileNotFound = path.join(testFolder, 'fileNotFound.json');

async function oneTest(filePath, options) {
  console.log('--------------------');
  console.log(`\nCall import/export with ${filePath} and ${JSON.stringify(options, null, 2)}`);

  console.log('\nimport');
  const importedJson = importJsonFile(filePath, options);
  console.log('data:');
  console.log(importedJson.data);
  console.log(`error: ${importedJson.error}`);

  console.log('\nexport');
  const exportedJson = exportJsonFile(importedJson.data, exportedFile, options);
  console.log(`error: ${exportedJson.error}`);

  console.log();
  await waitForEnter();
  console.log();
}

async function testMultipleImports(filePaths, options) {
  console.log('--------------------');
  console.log(`\nCall importMultipleJson() with ${JSON.stringify(filePaths, null, 2)} and ${JSON.stringify(options, null, 2)}\n`);

  const importedFiles = importMultipleJson(filePaths, options);

  console.log('\ndata:');
  console.log(importedFiles.data);
  console.log(`errors: ${importedFiles.errors}`);

  console.log();
  await waitForEnter();
  console.log();
}

async function testWithoutExt(filePath) {
  console.log('--------------------');
  console.log('\nCall exportJsonFile() without extension');

  console.log('\nexport');
  const exportedJson = exportJsonFile([], filePath);
  console.log(`error: ${exportedJson.error}`);

  console.log();
  await waitForEnter();
  console.log();
}

async function runTest() {
  await oneTest(fileWithData);
  await oneTest(exportedFile);
  await testMultipleImports([fileWithData, exportedFile]);
  await testMultipleImports(testFolder, { exitIfError: false });
  await testWithoutExt(fileWithoutExt);
  await oneTest(fileWithData, { displayLogs: false });
  await oneTest(emptyStringFile, { exitIfEmpty: false });
  await oneTest(emptyArrayFile, { exitIfEmpty: false });
  await oneTest(emptyObjectFile, { exitIfEmpty: false });
  await oneTest(emptyFile, { exitIfEmpty: false, exitIfError: false });
  await oneTest(fileNotFound, { exitIfEmpty: false, exitIfError: false });
  await oneTest(emptyArrayFile);
}

runTest();
