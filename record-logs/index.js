const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const writeLog = require('../write-log');

const logFolder = 'logs';
const consoleFile = 'console.txt';
const consoleFilePath = path.join(logFolder, consoleFile);

let logStream;
const nativeConsoleLog = console.log;
const nativeConsoleError = console.error;

async function startRecordingLogs() {
  // Delete the log folder
  try {
    if (fs.existsSync(logFolder)) {
      rimraf.sync(logFolder);
    }
  } catch (error) {
    writeLog.error('The log folder could not be emptied');
    writeLog.log(error);
  }

  try {
    // Create the log folder
    if (!fs.existsSync(logFolder)) {
      await fs.promises.mkdir(logFolder);
    }

    // Create the console file
    await fs.promises.writeFile(consoleFilePath, '');

    // Redirect the logs
    logStream = fs.createWriteStream(consoleFilePath);

    console.log = (...args) => {
      nativeConsoleLog(...args);
      logStream.write(`${args.join(' ')}\n`);
    };

    console.error = (...args) => {
      nativeConsoleError(...args);
      logStream.write(`${args.join(' ')}\n`);
    };
  } catch (error) {
    writeLog.error('The log recording could not start');
    writeLog.log(error);
  }
}

function stopRecordingLogs() {
  if (logStream) {
    logStream.end();
  }

  console.log = nativeConsoleLog;
  console.error = nativeConsoleError;
}

async function showFileLogs(milliseconds) {
  const defaultInterval = 500;
  let interval = milliseconds;

  if (!milliseconds) {
    interval = defaultInterval;
  }

  process.argv.forEach((processArg) => {
    if (processArg.includes('speed-') || processArg.includes('s-')) {
      interval = processArg.replace('--', '').replace('speed-', '').replace('s-', '');
      interval = parseInt(interval, 10);
      interval = !Number.isNaN(interval) ? interval : milliseconds || defaultInterval;
    }
  });

  const logs = fs.readFileSync(consoleFilePath, 'utf8');

  if (logs) {
    const lines = logs.split('\n').filter((line) => line.trim() !== '');

    for (let i = 0; i < lines.length; i += 1) {
      let line = lines[i];
      const waitingTime = interval;

      if (line.includes('[') && line.includes('[0m')) {
        line = line.replace('[', '\x1b[').replace('[0m', '[0m,');
        const commaIndex = line.indexOf(',');
        console.log(line.slice(0, commaIndex), line.slice(commaIndex + 1).trim());
      } else {
        console.log(line);
      }
      await new Promise((resolve) => setTimeout(resolve, waitingTime));
    }
  } else {
    writeLog.error('The log file is empty');
  }
}

module.exports = {
  startRecordingLogs,
  stopRecordingLogs,
  showFileLogs,
  logFolder,
  consoleFile,
  consoleFilePath,
};
