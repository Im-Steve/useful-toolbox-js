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
  const moduleName = 'module';
  const badModuleName = 'badmodule';

  await oneTest('node testLogs.js');
  await oneTest('node testLogs.js dev');
  await oneTest('node testLogs.js --dev');
  await oneTest(`node testLogs.js debug-${badModuleName}`);
  await oneTest(`node testLogs.js --debug-${badModuleName}`);
  await oneTest('node testLogs.js debug');
  await oneTest('node testLogs.js --debug');
  await oneTest(`node testLogs.js debug--${moduleName}`);
  await oneTest(`node testLogs.js --debug-${moduleName}`);
  await oneTest(`node testLogs.js debug-${moduleName}-${badModuleName}`);
  await oneTest(`node testLogs.js --debug-${moduleName}-${badModuleName}`);

  console.log('Test completed!');
}

runTest();
