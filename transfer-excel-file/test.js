const path = require('path');

const { importExcelFile, exportExcelFile, importMultipleExcel } = require('.');
const { waitForEnter } = require('../execute-and-wait');

const testFolder = 'filesToTest';
const fileWithData = path.join(testFolder, 'dataToTest.xlsx');
const exportedFile = path.join(testFolder, 'exportedData.xlsx');
const fileWithoutExt = path.join(testFolder, 'exportedData');
const emptyFile = path.join(testFolder, 'emptyFile.xlsx');
const fileNotFound = 'fileNotFound.xlsx';

async function oneTest(filePath, options) {
  console.log('--------------------');
  console.log(`\nCall import/export with ${filePath} and ${JSON.stringify(options, null, 2)}`);

  console.log('\nimport');
  const importedExcel = importExcelFile(filePath, options);
  console.log('data:');
  console.log(importedExcel.data);
  console.log(`error: ${importedExcel.error}`);

  console.log('\nexport');
  const exportedExcel = exportExcelFile(importedExcel.data, exportedFile, options);
  console.log(`error: ${exportedExcel.error}`);

  console.log();
  await waitForEnter();
  console.log();
}

async function testMultipleImports(filePaths, options) {
  console.log('--------------------');
  console.log(`\nCall importMultipleExcel() with ${JSON.stringify(filePaths, null, 2)} and ${JSON.stringify(options, null, 2)}\n`);

  const importedFiles = importMultipleExcel(filePaths, options);

  console.log('\ndata:');
  console.log(importedFiles.data);
  console.log(`errors: ${importedFiles.errors}`);

  console.log();
  await waitForEnter();
  console.log();
}

async function testWithoutExt(filePath) {
  console.log('--------------------');
  console.log('\nCall exportExcelFile() without extension');

  console.log('\nexport');
  const exportedExcel = exportExcelFile([], filePath);
  console.log(`error: ${exportedExcel.error}`);

  console.log();
  await waitForEnter();
  console.log();
}

async function runTest() {
  await oneTest(fileWithData);
  await oneTest(exportedFile);
  await testMultipleImports([fileWithData, exportedFile, emptyFile]);
  await testMultipleImports(testFolder);
  await testWithoutExt(fileWithoutExt);
  await oneTest(fileWithData, { displayLogs: false });
  await oneTest(emptyFile, { exitIfEmpty: false });
  await oneTest(fileNotFound, { exitIfEmpty: false, exitIfError: false });
  await oneTest(emptyFile);
}

runTest();
