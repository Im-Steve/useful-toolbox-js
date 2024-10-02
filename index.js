const { executeCommand, waitForEnter } = require('./execute-and-wait');
const writeLog = require('./write-log');
const {
  startRecordingLogs,
  stopRecordingLogs,
  showFileLogs,
  logFolder,
  consoleFile,
  consoleFilePath,
} = require('./record-logs');
const { showFormattedTime, showElapsedTime } = require('./show-time');
const { launchBrowser, setPage } = require('./launch-browser');
const { importExcelFile, exportExcelFile, importMultipleExcel } = require('./transfer-excel-file');
const { importJsonFile, exportJsonFile, importMultipleJson } = require('./transfer-json-file');
const { engDateToJsDate, frDateToJsDate } = require('./date-to-js-date');
const saveImage = require('./save-image');
const createFolder = require('./create-folder');
const { normalizeText, formatFileName } = require('./format-data');
const findFileByName = require('./find-file-by-name');
const exitProcess = require('./exit-process');
const animations = require('./useless-animations');

const {
  happyStickFigure,
  veryHappyStickFigure,
  flipTable,
  flipTableBear,
  bearInLove,
} = animations;

module.exports = {
  executeCommand,
  waitForEnter,
  writeLog,
  startRecordingLogs,
  stopRecordingLogs,
  showFileLogs,
  logFolder,
  consoleFile,
  consoleFilePath,
  showFormattedTime,
  showElapsedTime,
  launchBrowser,
  setPage,
  importExcelFile,
  exportExcelFile,
  importMultipleExcel,
  importJsonFile,
  exportJsonFile,
  importMultipleJson,
  engDateToJsDate,
  frDateToJsDate,
  saveImage,
  createFolder,
  normalizeText,
  formatFileName,
  findFileByName,
  exitProcess,
  animations,
  happyStickFigure,
  veryHappyStickFigure,
  flipTable,
  flipTableBear,
  bearInLove,
};
