const {
  showFileLogs,
  startRecordingLogs,
  stopRecordingLogs,
} = require('.');
const writeLog = require('../write-log');

async function runTest() {
  console.log();
  if (process.argv.length < 3) {
    console.log('no argument');
  }
  for (let i = 2; i < process.argv.length; i += 1) {
    console.log('argument:', process.argv[i]);
  }
  console.log();

  console.log('Outgoing logs:');
  await startRecordingLogs();
  writeLog.step('RUN TEST');
  writeLog.log('a log');
  writeLog.log('a second log');
  writeLog.error('an error log');
  stopRecordingLogs();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log();

  console.log('File logs with showFileLogs():');
  await showFileLogs({ ms: 50 });
  console.log();
  console.log('Error logs with showFileLogs():');
  await showFileLogs({ ms: 50, onlyErrors: true });
}

runTest();
