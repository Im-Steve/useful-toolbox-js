const { executeCommand, waitForEnter } = require('.');

async function runTest() {
  const command = 'node testHelloWorld.js';

  console.log(`\nCommand to execute: ${command}\n`);
  await executeCommand(command);
  console.log();
  await waitForEnter();

  console.log('\nTest completed!');
}

runTest();
