const { flipTable } = require('../useless-animations');
const writeLog = require('../write-log');

async function exitProcess(functionName) {
  writeLog.alert(`${functionName ? `${functionName} ` : ''}process.exit();`);
  await flipTable();
  process.exit();
}

module.exports = exitProcess;
