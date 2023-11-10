const { executeCommand, waitForEnter } = require('../execute-and-wait');

async function oneTest(command) {
  console.log('////////////////////\n');
  console.log(`Command executed: ${command}\n`);
  await executeCommand(command);
  console.log();
  await waitForEnter();
  console.log();
}

async function runTest() {
  await oneTest('node testLogs.js');
  await oneTest('node testLogs.js dev');
  await oneTest('node testLogs.js --dev');
  await oneTest('node testLogs.js debug');
  await oneTest('node testLogs.js --debug');
  await oneTest('node testLogs.js debug module');
  await oneTest('node testLogs.js --debug-module');
  await oneTest('node testLogs.js debug-all');
  await oneTest('node testLogs.js --debug-all');

  console.log('Test completed!');
}

runTest();
